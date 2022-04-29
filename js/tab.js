
<!DOCTYPE html>
<html>
  <head>
    <link rel="icon" type="image.png" href="image.png" />
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width" />
    <link rel="stylesheet" href="/js/tab.css" />
    <title>Tab Cloak | 3kh0</title>
  </head>
  <body>
    <div class="console-container">
      <div class="console">
        <h1>Tab Cloaker</h1>
        <div class="consolebody">
          <p>Enter a new tab title or a image URL below. Whatever you set will be used all over the site.</p>
          <p class="console-input">> <input id="userinput" type="url" pattern="https://.*" placeholder="Enter a title or image URL" autocomplete="on" autofocus /></p>
          <p>Output: <span id="console-output"></span></p>
        </div>
      </div>
      <div class="button-wrapper">
        <button onclick="changeTabTitle();" class="console-button">Set Title</button>
        <button onclick="changeTabIcon();" class="console-button">Set Icon</button>
        <button onclick="resetTabSettings();" class="console-button">Reset</button>
      </div>
      <div class="examples">
        <h2>Presets:</h2>
        <p><b>Google Search: </b><button onclick="applyUrl('https://storage.googleapis.com/operating-anagram-8280/favicon-32x32.png', 'Math pratice - Google Search');">Apply</button></p>
        <p><b>Google Classroom: </b><button onclick="applyUrl('https://ssl.gstatic.com/classroom/favicon.png', 'Classes');">Apply</button></p>
        <p><b>Google Docs: </b><button onclick="applyUrl('https://ssl.gstatic.com/docs/documents/images/kix-favicon7.ico', 'Class notes - Google Docs');">Apply</button></p>
        <p><b>Google Drive: </b><button onclick="applyUrl('https://ssl.gstatic.com/images/branding/product/2x/hh_drive_36dp.png', 'My Drive - Google Drive');">Apply</button></p>
        <p><b>Canvas: </b><button onclick="applyUrl('https://du11hjcvx0uqb.cloudfront.net/dist/images/favicon-e10d657a73.ico' , 'Dashboard');">Apply</button></p>
        <p><b>Schoology: </b><button onclick="applyUrl('https://asset-cdn.schoology.com/sites/all/themes/schoology_theme/favicon.ico', 'Home | Schoology');">Apply</button></p>
        <p>
          <b>my NG connect: </b>
          <button onclick="applyUrl('https://t0.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://www.myngconnect.com/login/chooseMainUI.spr&size=16', 'my NG connect');">Apply</button>
        </p>
      </div>
    </div>
    <script src="/js/main.js"></script>
    <script src="/js/tab.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
  </body>
</html>
