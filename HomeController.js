// Auto Create new picture in Gallary
function CreateGallary()
{
    let ListUrl = [
        {id:1,url:"https://upload.wikimedia.org/wikipedia/commons/a/a4/CB400SuperFour%28NC39%E5%88%9D%E6%9C%9F%E5%9E%8B%282000%E5%B9%B4%E5%9E%8B%29%29_%E3%82%B9%E3%83%9A%E3%83%B3%E3%82%B5%E3%83%BC%E3%82%AB%E3%83%A9%E3%83%BC.jpg",caption:"Honda CB400"},
        {id:2,url:"https://phuongnamgia.vn/thumbs/1000x0x1/upload/product/kawasaki-z1000-17-3128.jpg",caption:"Kawasaki Z1000"},
        {id:3,url:"https://phuongnamgia.vn/thumbs/1000x0x1/upload/product/kawasaki-z1000-17-3128.jpg",caption:"Kawasaki Z1000"}
    ];
    let res = document.getElementById('Motorgallery');
    // Create new element
    // Add element by list
    ListUrl.forEach(element => {
        const galleryContainer = document.createElement('div');
        galleryContainer.className = 'gallery';
    
        // Create a new image element
        const img = document.createElement('img');
        img.src = element.url;
        img.width = 300;
        img.height = 300;
    
        // Create a new overlay div
        const overlay = document.createElement('div');
        overlay.className = 'overlay';
        overlay.textContent = element.caption;
    
        // Append image and overlay to the gallery container
        galleryContainer.appendChild(img);
        galleryContainer.appendChild(overlay);
    
        // Append the gallery container to the main container
        res.appendChild(galleryContainer);
    });     
}

