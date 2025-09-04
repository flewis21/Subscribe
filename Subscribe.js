function addSubscription() {
  return;
}
function doGetOld() {
  var template = HtmlService.createTemplate(`<!DOCTYPE html>
<html lang="en">
  <head>
    <base target="_self" />

    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css"
    />
    <?!= style ?>
  </head>

  <body class=¨yellow¨>

    <h1><blockquote>Featured Artist:</blockquote></h1>

    <p><blockquote>Larry Henry!</blockquote></p>
  
    <div class="yellow"; padding=0; align="center">      
      <table id="imgSlider">
        <tr>
          <td>
            
      <div class="separator" style="clear: both;"><a href="https://th.bing.com/th/id/OIP.hg_4F_GcFIXyaWBmQMwK3QHaEo?w=261&amp;h=180&amp;c=7&amp;r=0&amp;o=5&amp;pid=1.7" style="display: block; padding: 1em 0; text-align: left; "><img alt="" border="0" data-original-height="180" data-original-width="261" src="https://th.bing.com/th/id/OIP.hg_4F_GcFIXyaWBmQMwK3QHaEo?w=261&amp;h=180&amp;c=7&amp;r=0&amp;o=5&amp;pid=1.7"/></a></div>

          </td>

          <td>
            
      <div class="separator" style="clear: both;"><a href="https://th.bing.com/th/id/OIP.hg_4F_GcFIXyaWBmQMwK3QHaEo?w=261&amp;h=180&amp;c=7&amp;r=0&amp;o=5&amp;pid=1.7" style="display: block; padding: 1em 0; text-align: left; "><img alt="" border="0" data-original-height="180" data-original-width="261" src="https://th.bing.com/th/id/OIP.hg_4F_GcFIXyaWBmQMwK3QHaEo?w=261&amp;h=180&amp;c=7&amp;r=0&amp;o=5&amp;pid=1.7"/></a></div>

          </td>

          <td>
            
      <div class="separator" style="clear: both;"><a href="https://th.bing.com/th/id/OIP.hg_4F_GcFIXyaWBmQMwK3QHaEo?w=261&amp;h=180&amp;c=7&amp;r=0&amp;o=5&amp;pid=1.7" style="display: block; padding: 1em 0; text-align: left; "><img alt="" border="0" data-original-height="180" data-original-width="261" src="https://th.bing.com/th/id/OIP.hg_4F_GcFIXyaWBmQMwK3QHaEo?w=261&amp;h=180&amp;c=7&amp;r=0&amp;o=5&amp;pid=1.7"/></a></div>

          </td>
        </tr>
      </table>
    </div>
    
      <a href="%20%20%20%20%3Ch1%3E%3C?=%20foo%20?%3E%3C/h1%3E%3Cdiv%20class=%22separator%22%20style=%22clear:%20both;%22%3E%3Ca%20href=%22https://th.bing.com/th/id/OIP.hg_4F_GcFIXyaWBmQMwK3QHaEo?w=261&amp;amp;h=180&amp;amp;c=7&amp;amp;r=0&amp;amp;o=5&amp;amp;pid=1.7%22%20style=%22display:%20block;%20padding:%201em%200;%20text-align:%20center;%20%22%3E%3Cimg%20alt=%22%22%20border=%220%22%20data-original-height=%22180%22%20data-original-width=%22261%22%20src=%22https://th.bing.com/th/id/OIP.hg_4F_GcFIXyaWBmQMwK3QHaEo?w=261&amp;amp;h=180&amp;amp;c=7&amp;amp;r=0&amp;amp;o=5&amp;amp;pid=1.7%22/%3E%3C/a%3E%3C/div%3E" target="_blank" rel="nofollow"></a>

    <div id="slideContent" class="responsive-image">
      <iframe
        src="https://docs.google.com/presentation/d/e/2PACX-1vRdRMaOma2eOjpse2Drkww9jQkrTc9CiD1maR41MUfJBsnDkVR9j0wIQMjHq1jnCZIyZ4wyRMu2MnYV/embed?start=true&loop=true&delayms=2000"
        frameborder="0"
        width="100%"
        height="700"
        allowfullscreen="true"
        mozallowfullscreen="true"
        webkitallowfullscreen="true"
      ></iframe>
  	</div>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
  </body>
</html>`);
  template.style = `<style>
  body {
    background-color: red;
    border: 2px solid powderblue;
      
  }
  h1 {
    color: grey;
    fontfamily: Times New Roman;
    fontsize: 300%;
    margin: 10px;

  }
  p {
    color: purple;
    fontfamily: lato;
    background-color: gold;
    fontsize: 160%;
    margin: 10px;

  }

</style>`;
  return template
    .evaluate()
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}
// Creates an import or include function so files can be added
// inside the main index.html
function include(file) {
  HtmlService.createHtmlOutputFromFile(file).getContent();
}
// A template which evaluates to whatever is bound to 'foo'.
// var template = HtmlService.createTemplateFromFile('index');
//    HtmlService.createHtmlOutputFromFile('index')
//    .getContent();
// template.foo = 'Hello World!';
// Logger.log(template.evaluate());  // will log 'Hello World!'
