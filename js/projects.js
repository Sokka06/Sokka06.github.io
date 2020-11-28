$(document).ready(function() {

    $.getJSON("../projects.json", CreateProjects).fail(function(){
        console.log("An error has occurred.");
    })
    
});

function CreateProjects(data)
{
    var container = $('#projects-container');

    for (var i = 0; i < data.projectData.length; ++i) 
    {
    
        container.append('<hr class="my-4">');

        var projectData = data.projectData[i];
        
        var row = $('<div class="row px-5 py-5' + (i % 2 === 0 ? '' : ' bg-dark') + '">');

        var col1 = (i % 2 === 0 ? MakeText(projectData) : MakeCarousel(projectData, i));
        row.append(col1);

        var col2 = (i % 2 === 0 ? MakeCarousel(projectData, i) : MakeText(projectData));
        
        row.append(col2);

        row.append('</div>');
        container.append(row)
        
    }
}

function MakeText(data)
{
    var col1 = $('<div class="col text-white">');

    var title = col1.append('<h3>' + data.title + '</h3>');
    var subtitle = col1.append('<h6 class="text-muted">' + data.subtitle + '</h6>');
    var body = col1.append(data.body.join('\n'));

    col1.append('</div>');
    return col1;
}

function MakeCarousel(data, index)
{
    var id = 'projectCarousel' + index;
    var col2 = $('<div class="col">');
    var carousel = $('<div id="' + id +'" class="carousel slide carousel-fade" data-ride="carousel" data-interval="false">');

    var indicatorList = $('<ol class="carousel-indicators">');
    for (var i = 0; i < data.media.length; ++i) 
    {
        var indicator = $('<li data-target="#' + id +'" data-slide-to="' + i + '"' + (i == 0 ? ' class="active">' : '>') + '</li>');
        indicatorList.append(indicator);
    }
    indicatorList.append('</ol>');
    carousel.append(indicatorList);

    var inner = $('<div class="carousel-inner">')
    for (var i = 0; i < data.media.length; ++i) 
    {
        var item = $('<div class="carousel-item' + (i == 0 ? ' active' : '') + '">');
        item.append(CarouselItem(data.media[i]));
        item.append('</div>');
        inner.append(item);
    }
    inner.append('</div>');
    carousel.append(inner);

    var buttons = 
    $(
        '<a class="carousel-control-prev" href="#' + id +'" role="button" data-slide="prev">' + 
            '<span class="carousel-control-prev-icon" aria-hidden="true"></span>' +
            '<span class="sr-only">Previous</span>' +
        '</a>' +
        '<a class="carousel-control-next" href="#' + id +'" role="button" data-slide="next">' +
            '<span class="carousel-control-next-icon" aria-hidden="true"></span>' +
            '<span class="sr-only">Next</span>' +
        '</a>'
    );
    carousel.append(buttons);

    carousel.append('</div>');
    col2.append(carousel);
    col2.append('</div>');
    return col2;
}

function CarouselItem(media) 
{
    var item = '';

    switch (get_url_extension(media.url))
    {
        case 'jpg':
            item = '<img src="' + media.url + '" class="rounded d-block w-100 h-auto" style="max-height: 24em;" alt="...">';
            break;
        case 'mp4':
            item = 
            '<video class="rounded w-100 h-auto" style="max-height: 24em;" autoplay loop muted>' +
                '<source src="' + media.url +'" type="video/mp4" />' +
            '</video>';
            break;
    }
    return item;
}

function get_url_extension( url ) {
    return url.split(/[#?]/)[0].split('.').pop().trim();
}