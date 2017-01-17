export class popupMessage {
  popups: string[] = [];
  duration: number = 3000;
  width: number = 30;

  constructor(title: string, message: string, type: string) {
    let index = this.popups.push('i');

    let template = `
<div class="alert alert-${type} popupmessage" id="popupmessage${index}" style="width:${this.width}vw;">
<span class="pull-right glyphicon glyphicon-remove" style="cursor:pointer;"></span>
<strong>${title}</strong>
<p>${message}</p>
</div>`;

    $('body').prepend(template);

    let $template = $('#popupmessage' + index);

    $template.show();

    $template.on('click', function(){$(this).remove()});

    setTimeout(()=> {
      $template.remove();
    }, this.duration);
  };
}
