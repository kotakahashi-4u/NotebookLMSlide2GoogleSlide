/**
 * スライドを開いたときにメニューを追加する
 */
function onOpen() {
  SlidesApp.getUi()
      .createMenu('PDF変換ツール')
      .addItem('変換サイドバーを開く', 'showSidebar')
      .addToUi();
}

/**
 * サイドバーを表示する
 */
function showSidebar() {
  const html = HtmlService.createHtmlOutputFromFile('Sidebar')
        .setTitle('NotebookLM PDF 取込')
        .setWidth(400);
  SlidesApp.getUi().showSidebar(html);
}

/**
 * クライアント側から受け取った画像データとテキストでスライドを作成する
 * @param {string} imageBase64 - 画像のBase64データ
 * @param {string} textNotes - スピーカーノートに入れるテキスト
 * @param {number} pageIndex - ページ番号（ログ用）
 */
function addSlideFromData(imageBase64, textNotes, pageIndex) {
  try {
    let pres = SlidesApp.getActivePresentation();
    
    // 画像データのヘッダー除去とBlob化
    let contentType = 'image/png',
        data = imageBase64.replace(/^data:image\/png;base64,/, ""),
        decoded = Utilities.base64Decode(data),
        blob = Utilities.newBlob(decoded, contentType, "page_" + pageIndex + ".png");
    
    // 新しいスライドを追加
    const slide = pres.appendSlide(SlidesApp.PredefinedLayout.BLANK);
    
    // 【修正箇所】背景に画像を設定 (setPicture -> setPictureFill)
    slide.getBackground().setPictureFill(blob);
    
    // スピーカーノートにテキストを設定
    if (textNotes && textNotes.trim() !== "") {
      let notesPage = slide.getNotesPage();
      let speakerNotesShape = notesPage.getSpeakerNotesShape();
      
      // ノートシェイプが存在しない場合の安全策
      if (speakerNotesShape) {
        speakerNotesShape.getText().setText(textNotes);
      }
    }
    
    return { success: true, page: pageIndex };
    
  } catch (e) {
    Logger.log("Error on page " + pageIndex + ": " + e.toString());
    return { success: false, error: e.toString() };
  }
}
