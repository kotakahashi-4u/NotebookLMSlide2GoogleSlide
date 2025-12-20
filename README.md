# NotebookLMSlide2GoogleSlide

## プロジェクトについて
Google Apps Scriptを用いて、NotebookLMで出力したPDF形式のスライド資料をGoogleスライドに取り込む（画像として背景に設定する）。

## 使い方
1. Googleスライドのコンテナバインド型としてGASを開く。
   <img width="777" height="150" alt="Image" src="https://github.com/user-attachments/assets/ed751297-0442-4cc7-89d1-a589b80a1108" />
2. 開いたスクリプトエディタ上のコード.gsに本リポジトリの <a href="https://github.com/kotakahashi-4u/NotebookLMSlide2GoogleSlide/blob/main/code.gs" target="_blank">code.gs</a>(Windows: **Ctrl+Click** / Mac: **Cmd+Click**) の内容をコピーして、貼り付ける。  
   <img width="679" height="253" alt="Image" src="https://github.com/user-attachments/assets/e593fcb1-8f27-4779-9803-0f587461ebc4" /> 
3. スクリプトエディタ上の「＋」ボタンを押下し、HTMLファイルを選択する。
   <img width="595" height="255" alt="Image" src="https://github.com/user-attachments/assets/a75d9805-a296-4d99-b160-b086f6288af6" />
4. ファイル名は「Sidebar」と入力する。このとき、ファイル名は大文字小文字も区別されるため、「Sidebar」と同一にすること。
   <img width="594" height="244" alt="Image" src="https://github.com/user-attachments/assets/23ab603f-86df-4bc0-8d1d-ac21f937962d" />
5. 作成したSidebar.htmlに本リポジトリの <a href="https://github.com/kotakahashi-4u/NotebookLMSlide2GoogleSlide/blob/main/Sidebar.html" target="_blank">Sidebar.html</a>(Windows: **Ctrl+Click** / Mac: **Cmd+Click**) の内容をコピーして、貼り付ける。  
6. 作成後にGoogleスライドをリロードすると、メニュータブに「PDF変換ツール」が表示されることを確認する。
   <img width="1440" height="159" alt="Image" src="https://github.com/user-attachments/assets/bf4c926f-2b9a-467f-95b7-16e96321ea11" />
8. Googleスライドのメニューから PDF変換ツール > 変換サイドバーを開く を選択しサイドバーを呼び出す。
9. 初回起動時のみ承認プロセスが必要となるため、以下対応を行う。
   1. 認証ダイアログにて、「OK」ボタンを押下する。  
      <img width="472" height="215" alt="Image" src="https://github.com/user-attachments/assets/75ce2b96-ef6f-4cc4-af88-b9f45a17fa7d" />
   2. アカウント選択ダイアログにて、ご自身のアカウントを選択する。  
      <img width="496" height="607" alt="Image" src="https://github.com/user-attachments/assets/2ec71532-b244-44a4-8ea2-bcde0436c761" />
   3. 接続するサービスに「すべて選択」を押下したうえで、「続行」ボタンを押下する。  
      <img width="482" height="928" alt="Image" src="https://github.com/user-attachments/assets/ba90f04b-c5c4-4aaf-bd15-4b7c0cb2f8b0" />
10. 承認プロセスが完了するとサイドバーが開くため、画面に従ってファイル選択ダイアログからNotebookLMで作成したPDFを選択する。
    <img width="1440" height="772" alt="Image" src="https://github.com/user-attachments/assets/10f6b648-7af4-4d4c-bed4-1b2404377841" />
11. しばらく待つと処理が完了し、PDFファイルの各ページが各スライドの割りつく。その後は、Googleスライド上のNanoBananaProを用いることで画像編集が可能となる。
