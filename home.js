onload = () => {
    fetch('http://diwserver.vps.webdock.cloud:8765/products/category/Accessories - Eyewear')
    .then(response => response.json())
    .then(data => {

      console.log(data);
    })
    .catch(error => {

      console.error(error);
    });
}