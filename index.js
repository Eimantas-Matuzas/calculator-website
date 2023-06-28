document.getElementById("calculate").addEventListener('click', function () {
var voltage_val = "";
var current_val = "";
var resistance_val = "";
var power_val = "";

var voltage_val =  voltage.value;
var current_val = current.value;
var resistance_val = resistance.value;
var power_val = power.value;

// check if voltage is entered 
if(voltage_val !== ""){
// if yes {
// check if current is entered
if(current_val !== ""){
// do corresponding formula (calculate resistance and power)
var resistance_val = voltage_val / current_val;
var power_val = voltage_val * current_val;
}
// if no{
else {
// check if resistance is entered
if(resistance_val !== ""){
// if yes {
// do corresponding formula (calculate current and power)
var current_val = voltage_val / resistance_val;
var power_val = (voltage_val * voltage_val) / resistance_val ;
}
// if no {
else {
// check if power is entered
if(power_val !== ""){
// if yes {
// do corresponding formula (calculate current and resistance)
var current_val = power_val / voltage_val;
var resistance_val = power_val / (current_val * current_val);
}
// if no{
else {
// // // // // // // // // // // // // // // // // // // // // // // // // echo 2 fields need to be filled
}
}
}
}
// if no {
else {
// check if current is entered
if(current_val !== ""){
// if yes{
// check if resistance is entered
if(resistance_val !== ""){
// if yes{
// do correct formula (calculate voltage and power)
var voltage_val = current_val * resistance_val;
var power_val = (current_val * current_val) * resistance_val;
}
// if no {
else {
// check if power is entered
if(power_val !== ""){
// if yes {
// do corresponding formula (calculate voltage and resistance)
var voltage_val = power_val / current_val;
var resistance_val = power_val / (current_val * current_val);
}
// if no {
else {
// // // // // // // // // // // // // // // // // // // // // // // // // echo 2 fields need to be filled
}
}
}
// if no {
else {
// check if resisrance is entered
if(resistance_val !== ""){
// if yes{
// check if the power entered
if(power_val !== ""){
// if yes {
// do corresponding formula (calculate voltage and current)
var current_val = Math. sqrt(power_val / resistance_val) ;
var voltage_val = Math. sqrt(power_val * resistance_val) ;
}
// if no {
else {
// // // // // // // // // // // // // // // // // // // // // // // // // // // // // // echo 2 fields need to be filled
}
}
}
}
voltage.value = voltage_val;
current.value = current_val;
resistance.value = resistance_val;
power.value = power_val;});
// add the ansers to the main page by editing the boxes the text was entered into

    // var text = document.getElementById('voltage');
    // voltage.value = ' after clicking';
// });

