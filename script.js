let image_blog_Section = document.querySelector('.image_blog_Section')

let xml = new XMLHttpRequest();
xml.getResponseHeader('blogText', 'blogTemplete/json')
xml.open("GET", "../posts.json",true);
xml.onload = function(){
    if(this.status === 200){
        let object = JSON.parse(this.responseText);
        let Divsion = object.posts;

         Divsion.map((element) => {
      
        let First_div = document.createElement("div");
        First_div.className = "postImage";
        let blog_div_Image = document.createElement("div");
        blog_div_Image.className = "message";
        let paragraph1 = document.createElement("p")
        let paragraph1text = document.createTextNode("24 MAY")
        blog_div_Image.appendChild(paragraph1)
        paragraph1.appendChild(paragraph1text)
        First_div.appendChild(blog_div_Image);
        let img = document.createElement("img");
        img.setAttribute("src" , element.img)
        img.className="img"
        First_div.appendChild(img)
        let blog_page_div3 = document.createElement("div")
        blog_page_div3.className = "blogWed"
        
        let blog_page_div4 = document.createElement("div")
        blog_page_div4.className = "blog_card_leftImage"
        blog_page_div3.appendChild(blog_page_div4)

        let para2 = document.createElement("p")
        para2.classNamec="author"
        let templeteParagraphtext = document.createTextNode(element.author)
        let divImage1 = document.createElement("i")
        divImage1.classList.add("fa-solid", "fa-user")
        para2.appendChild(divImage1)
        blog_page_div4.appendChild(para2);
        para2.appendChild(templeteParagraphtext)

        let blog_page_div5 = document.createElement("div")
        blog_page_div4.className = "blog_card_rightImg"
        blog_page_div3.appendChild(blog_page_div5)

        let paragraph2 = document.createElement("p")
        let templeteParagraph2text = document.createTextNode("4 |")
        let templeteParatxt3 = document.createTextNode("12")
        let blog_Image2 = document.createElement("i")
        let templeteImage3 = document.createElement("i")
        blog_Image2.classList.add("fa-solid", "fa-heart")
        templeteImage3.classList.add("fa-solid", "fa-comment")
        paragraph2.appendChild(blog_Image2)
        paragraph2.appendChild(templeteParagraph2text)
        paragraph2.appendChild(templeteImage3)
        paragraph2.appendChild(templeteParatxt3)
        blog_page_div5.appendChild(paragraph2);
        First_div.appendChild(blog_page_div3)
        
        let title = document.createElement("h3")
        let titletext = document.createTextNode(element.title)
        title.className="title"
        title.appendChild(titletext)
        First_div.appendChild(title);

        image_blog_Section.appendChild(First_div);
        let Image_Description_para = document.createElement("p")
        Image_Description_para.className = "disc"
        let desc = document.createTextNode(element.desc)
        Image_Description_para.appendChild(desc)
        First_div.appendChild(Image_Description_para)
        
        })
        
       
    }
    else{
        console.log("Error");
    }
}
xml.send();


