var arr_img = ["Image/banneraf1.png", "Image/banner2.jpg", "Image/banner-burnstore.jpg"];
        var image = document.getElementById("anh");
    
        index = 0;
        function next() {
          index++;
          if (index > 2) {
            index = 0;
          }
          console.log(index);
          image.src = arr_img[index];
        }
        function pre() {
    
          index--;
          if (index < 0) {
            index = arr_img.length - 1;
          }
          console.log(index);
          image.src = arr_img[index];
        }