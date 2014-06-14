'use strict';

exports.create = function() {

  var currentIngredeint = '';
  var allIngredients = '';

  var sendIngredient = function (string) {
    $('<p>', {text: string}).appendTo('.on_hand');
    currentIngredeint = '';
    allIngredients += string;
    console.log('So you have ' + allIngredients);
    console.log('I am sending ze ingredient of ze ' + allIngredients);
    var url = 'http://api.yummly.com/v1/api/recipes';
    var data = {
      _app_id: '95976979', /* Yummly Info */
      _app_key: 'eff2325375207c7f74f9579b798c73cb',
      q: allIngredients
    };

    $.ajax(url, {data: data, dataType: 'jsonp',
      callback: 'jsonCallback'})
      .then(function (data, status, xhr) {
        console.log('I have obtained ze recipes');
        console.log(data);
        showOtherIngredients(data);
      }, function (xhr, status, error) {
        console.log(error);
      });
  };

  var detectInput = function () {
    $('textarea').keydown(function (k) {
      if (k.keyCode === 13) {
        currentIngredeint = $(this).val();
        $(this).val('');
        console.log('You say you have a ' + currentIngredeint);
        sendIngredient(currentIngredeint);
      }
      console.log($(this).val());
    });
  };



detectInput();
};
