function inject_blog_data(data) {
    var tag_string = ""
    for(i = 0; i < data.tags.length; i++){
        var delimiter = ","
        if(i==data.tags.length-1){
            delimiter = ""
        }
        var tag = data.tags[i]+delimiter
        tag_string+=`<li><a href="#">${tag}</a></li>`
    }
    var blog_string = `<div class="single-post row">
                                <div class="col-lg-3  col-md-3 meta-details">
                                    <ul class="tags">
                                        ${tag_string}
                                    </ul>
                                    <div class="user-details row">
                                        <p class="user-name col-lg-12 col-md-12 col-6"><a href="#">${data.author}</a> <span class="lnr lnr-user"></span></p>
                                        <p class="date col-lg-12 col-md-12 col-6"><a href="#">${data.date}</a> <span class="lnr lnr-calendar-full"></span></p>                     
                                    </div>
                                </div>
                                
                                <div class="col-lg-9 col-md-9 ">
                                    <div class="feature-img">
                                        <img class="img-fluid" src="${data.cover_image}" alt="">
                                    </div>
                                    <a class="posts-title" href="${data.blog_src}"><h3>${data.title}</h3></a>
                                    <p class="excert">
                                        ${data.summary}
                                    </p>
                                    <a href="${data.blog_src}" class="primary-btn">View More</a>
                                </div>
                            </div>`
    return blog_string
}

function inject_project_data(data){
    var projectData=`<div exp="${data.experience}" class="single-portfolio col-sm-4 all ${data.fclass}">
                        <div class="relative">
                            <div class="thumb">
                                <div class="overlay overlay-bg"></div>
                                 <img class="image img-fluid" src="img/p1.png" alt="">
                            </div>
                            <div class="middle">
                                <div class="text align-self-center">
                                    <h4>${data.project}</h4>
                                    <h5>${data.stack}</h5>
                                    </div>  
                                </div>
                            </div>
                        <div class="p-inner">
                        </div>                                                 
                    </div>`
    return projectData
}