angular.module('miniStore').controller('ListProductController', function( $scope ) {

  $scope.product = [
    {
      "name": "Smartphone Samsung",
      "price": "899.99",
      "productImg": "http://static.wmobjects.com.br/imgres/arquivos/ids/4289414-220-220/smart-tv-led-32--samsung-32j4300-com-conversor-digital-2-hdmi-1-usb-wi-fi-integrado.jpg",
      "new_price": "699.99",
      "installment": "10x de R$ 69,90",
      "url": "https://www.walmart.com.br/smart-tv-led-32-samsung-32j4300-com-conversor-digital-2-hdmi-1-usb-wi-fi-integrado/3075994/pr",
      "_id":"MOUIdb3alJAvdpOG"
    },
    {
      "name": "Smartphone Samsung 2",
      "price": "899.99",
      "productImg": "http://static.wmobjects.com.br/imgres/arquivos/ids/4289414-220-220/smart-tv-led-32--samsung-32j4300-com-conversor-digital-2-hdmi-1-usb-wi-fi-integrado.jpg",
      "new_price": "699.99",
      "installment": "10x de R$ 69,90",
      "url": "https://www.walmart.com.br/smart-tv-led-32-samsung-32j4300-com-conversor-digital-2-hdmi-1-usb-wi-fi-integrado/3075994/pr",
      "_id":"MOUIdb3alJAvdpOG"
    },
    {
      "name": "Smartphone Samsung 3",
      "price": "899.99",
      "productImg": "http://static.wmobjects.com.br/imgres/arquivos/ids/4289414-220-220/smart-tv-led-32--samsung-32j4300-com-conversor-digital-2-hdmi-1-usb-wi-fi-integrado.jpg",
      "new_price": "699.99",
      "installment": "10x de R$ 69,90",
      "url": "https://www.walmart.com.br/smart-tv-led-32-samsung-32j4300-com-conversor-digital-2-hdmi-1-usb-wi-fi-integrado/3075994/pr",
      "_id":"MOUIdb3alJAvdpOG"
    }
  ];

  $scope.msg = '';
  $scope.cart = false;
  $scope.total = 0;

});
