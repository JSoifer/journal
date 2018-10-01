import { Entry } from './journal';
import './css/styles.css';
import './sass/styles.scss';
import $ from "jquery";

$(document).ready(function() {
  $('.journal').submit(function(event) {
    event.preventDefault();
    var inputtedEntryTitle = $("input[name='title']").val();
    var inputtedEntryBody = $("input[name='entry']").val();
    var output = new Entry(inputtedEntryBody, inputtedEntryTitle);
    $("#word-count").text(output.count());
    $("#consonants").text(output.consonants());
    $("#vowels").text(output.vowels());
  });
});
