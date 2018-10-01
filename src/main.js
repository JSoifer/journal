import { Entry } from './journal';
import './css/styles.css';
import './sass/styles.scss';
import $ from "jquery";

$(document).ready(function() {
  $('.journal').submit(function(event) {
    event.preventDefault();
    var inputtedEntryTitle = $("input[name='title']").val();
    // console.log(inputtedEntryTitle);
    var inputtedEntryBody = $("input[name='entry']").val();
    // console.log(inputtedEntryBody);
    var output = new Entry(inputtedEntryBody, inputtedEntryTitle);
    // console.log(output.count());
    $("#result").text(output.count());
    console.log(output.consonants());
  });
});
