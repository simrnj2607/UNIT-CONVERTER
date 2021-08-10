var input=document.getElementById('input');
var result=document.getElementById('result');
var inputType=document.getElementById('inputType');
var resultType=document.getElementById('resultType');
var inputTypeValue,resultTypeValue;
var mylist={
  'length':['kilometer','meter','centimeter','millimeter','micrometer','nanometer','mile','yard','foot','inch'],
  'weight':['tonne','kilogram','gram','milligram','microgram','pound','ounce'],
  'frequency':['hertz','kilohertz','megahertz','gigahertz'],
  'pressure':['bar','pascal','standard atmosphere','torr'],
  'temperature':['celsius','fahrenheit','kelvin'],
  'volume':['cubic meter','liter','milliliter']

};

input.addEventListener("keyup",myResult);
inputType.addEventListener("change",myResult);
resultType.addEventListener("change",myResult);
inputTypeValue=inputType.value;
resultTypeValue=resultType.value;

function myResult()
{

  inputTypeValue=inputType.value;
  resultTypeValue=resultType.value;


  if(inputTypeValue==='kilometer' && resultTypeValue==='kilometer')
    result.value=Number(input.value)*1;
  if(inputTypeValue==='kilometer' && resultTypeValue==='meter')
    result.value=Number(input.value)*1000;
  if(inputTypeValue==='kilometer' && resultTypeValue==='centimeter')
    result.value=Number(input.value)*100000;
  if(inputTypeValue==='kilometer' && resultTypeValue==='millimeter')
    result.value=Number(input.value)*1000000;
  if(inputTypeValue==='kilometer' && resultTypeValue==='micrometer')
    result.value=Number(input.value)*1000000000;
  if(inputTypeValue==='kilometer' && resultTypeValue==='nanometer')
    result.value=Number(input.value)*1000000000000;
  if(inputTypeValue==='kilometer' && resultTypeValue==='mile')
    result.value=Number(input.value)/1.609;
  if(inputTypeValue==='kilometer' && resultTypeValue==='yard')
    result.value=Number(input.value)*1094;
  if(inputTypeValue==='kilometer' && resultTypeValue==='foot')
    result.value=Number(input.value)*3281;
  if(inputTypeValue==='kilometer' && resultTypeValue==='inch')
    result.value=Number(input.value)*39370;
  if(inputTypeValue==='meter' && resultTypeValue==='kilometer')
    result.value=Number(input.value)*0.001;
  if(inputTypeValue==='meter' && resultTypeValue==='meter')
    result.value=Number(input.value)*1;
  if(inputTypeValue==='meter' && resultTypeValue==='centimeter')
    result.value=Number(input.value)*100;
  if(inputTypeValue==='meter' && resultTypeValue==='millimeter')
    result.value=Number(input.value)*1000;
  if(inputTypeValue==='meter' && resultTypeValue==='micrometer')
    result.value=Number(input.value)*1000000;
  if(inputTypeValue==='meter' && resultTypeValue==='nanometer')
    result.value=Number(input.value)*1000000000;
  if(inputTypeValue==='meter' && resultTypeValue==='mile')
    result.value=Number(input.value)/1609;
  if(inputTypeValue==='meter' && resultTypeValue==='yard')
    result.value=Number(input.value)*1.094;
  if(inputTypeValue==='meter' && resultTypeValue==='foot')
    result.value=Number(input.value)*3.281;
  if(inputTypeValue==='meter' && resultTypeValue==='inch')
    result.value=Number(input.value)*39.37;
  if(inputTypeValue==='centimeter' && resultTypeValue==='kilometer')
    result.value=Number(input.value)*0.00001;
  if(inputTypeValue==='centimeter' && resultTypeValue==='meter')
    result.value=Number(input.value)*0.01;
  if(inputTypeValue==='centimeter' && resultTypeValue==='centimeter')
    result.value=Number(input.value)*1;
  if(inputTypeValue==='centimeter' && resultTypeValue==='millimeter')
    result.value=Number(input.value)*10;
  if(inputTypeValue==='centimeter' && resultTypeValue==='micrometer')
    result.value=Number(input.value)*10000;
  if(inputTypeValue==='centimeter' && resultTypeValue==='nanometer')
    result.value=Number(input.value)*10000000;
  if(inputTypeValue==='centimeter' && resultTypeValue==='mile')
    result.value=Number(input.value)/160934;
  if(inputTypeValue==='centimeter' && resultTypeValue==='yard')
    result.value=Number(input.value)/91.44;
  if(inputTypeValue==='centimeter' && resultTypeValue==='foot')
    result.value=Number(input.value)/30.48;
  if(inputTypeValue==='centimeter' && resultTypeValue==='inch')
    result.value=Number(input.value)/2.54;
  if(inputTypeValue==='millimeter' && resultTypeValue==='kilometer')
    result.value=Number(input.value)*0.000001;
  if(inputTypeValue==='millimeter' && resultTypeValue==='meter')
    result.value=Number(input.value)*0.001;
  if(inputTypeValue==='millimeter' && resultTypeValue==='centimeter')
    result.value=Number(input.value)*0.1;
  if(inputTypeValue==='millimeter' && resultTypeValue==='millimeter')
    result.value=Number(input.value)*1;
  if(inputTypeValue==='millimeter' && resultTypeValue==='micrometer')
    result.value=Number(input.value)*1000;
  if(inputTypeValue==='millimeter' && resultTypeValue==='nanometer')
    result.value=Number(input.value)*1000000;
  if(inputTypeValue==='millimeter' && resultTypeValue==='mile')
    result.value=Number(input.value)*160900;
  if(inputTypeValue==='millimeter' && resultTypeValue==='yard')
    result.value=Number(input.value)/914;
  if(inputTypeValue==='millimeter' && resultTypeValue==='foot')
    result.value=Number(input.value)/305;
  if(inputTypeValue==='millimeter' && resultTypeValue==='inch')
    result.value=Number(input.value)/25.4;
  if(inputTypeValue==='micrometer' && resultTypeValue==='kilometer')
    result.value=Number(input.value)*0.000000001;
  if(inputTypeValue==='micrometer' && resultTypeValue==='meter')
    result.value=Number(input.value)*0.000001;
  if(inputTypeValue==='micrometer' && resultTypeValue==='centimeter')
    result.value=Number(input.value)*0.0001;
  if(inputTypeValue==='micrometer' && resultTypeValue==='millimeter')
    result.value=Number(input.value)*0.001;
  if(inputTypeValue==='micrometer' && resultTypeValue==='micrometer')
    result.value=Number(input.value)*1;
  if(inputTypeValue==='micrometer' && resultTypeValue==='nanometer')
    result.value=Number(input.value)*1000;
  if(inputTypeValue==='micrometer' && resultTypeValue==='mile')
    result.value=Number(input.value)*1609000000;
  if(inputTypeValue==='micrometer' && resultTypeValue==='yard')
    result.value=Number(input.value)/914400;
  if(inputTypeValue==='micrometer' && resultTypeValue==='foot')
    result.value=Number(input.value)/304800;
  if(inputTypeValue==='micrometer' && resultTypeValue==='inch')
    result.value=Number(input.value)/25400;
  if(inputTypeValue==='nanometer' && resultTypeValue==='kilometer')
    result.value=Number(input.value)*0.000000000001;
  if(inputTypeValue==='nanometer' && resultTypeValue==='meter')
    result.value=Number(input.value)*0.000000001;
  if(inputTypeValue==='nanometer' && resultTypeValue==='centimeter')
    result.value=Number(input.value)*0.0000001;
  if(inputTypeValue==='nanometer' && resultTypeValue==='millimeter')
    result.value=Number(input.value)*0.000001;
  if(inputTypeValue==='nanometer' && resultTypeValue==='micrometer')
    result.value=Number(input.value)*0.001;
  if(inputTypeValue==='nanometer' && resultTypeValue==='nanometer')
    result.value=Number(input.value)*1;
  if(inputTypeValue==='nanometer' && resultTypeValue==='mile')
    result.value=Number(input.value)/1609000000000;
  if(inputTypeValue==='nanometer' && resultTypeValue==='yard')
    result.value=Number(input.value)/914400000;
  if(inputTypeValue==='nanometer' && resultTypeValue==='foot')
    result.value=Number(input.value)/3048000000;
  if(inputTypeValue==='nanometer' && resultTypeValue==='inch')
    result.value=Number(input.value)/25400000;
  if(inputTypeValue==='mile' && resultTypeValue==='kilometer')
    result.value=Number(input.value)*1.609;
  if(inputTypeValue==='mile' && resultTypeValue==='meter')
    result.value=Number(input.value)*1609;
  if(inputTypeValue==='mile' && resultTypeValue==='centimeter')
    result.value=Number(input.value)*160934;
  if(inputTypeValue==='mile' && resultTypeValue==='millimeter')
    result.value=Number(input.value)*1609000;
  if(inputTypeValue==='mile' && resultTypeValue==='micrometer')
    result.value=Number(input.value)*1609000000;
  if(inputTypeValue==='mile' && resultTypeValue==='nanometer')
    result.value=Number(input.value)*1609000000000;
  if(inputTypeValue==='mile' && resultTypeValue==='mile')
    result.value=Number(input.value)*1;
  if(inputTypeValue==='mile' && resultTypeValue==='yard')
    result.value=Number(input.value)*1760;
  if(inputTypeValue==='mile' && resultTypeValue==='foot')
    result.value=Number(input.value)*5280;
  if(inputTypeValue==='mile' && resultTypeValue==='inch')
    result.value=Number(input.value)*63360;
  if(inputTypeValue==='yard' && resultTypeValue==='kilometer')
    result.value=Number(input.value)/1094;
  if(inputTypeValue==='yard' && resultTypeValue==='meter')
    result.value=Number(input.value)/1.094;
  if(inputTypeValue==='yard' && resultTypeValue==='centimeter')
    result.value=Number(input.value)*91.44;
  if(inputTypeValue==='yard' && resultTypeValue==='millimeter')
    result.value=Number(input.value)*914.4;
  if(inputTypeValue==='yard' && resultTypeValue==='micrometer')
    result.value=Number(input.value)*914400;
  if(inputTypeValue==='yard' && resultTypeValue==='nanometer')
    result.value=Number(input.value)*914400000;
  if(inputTypeValue==='yard' && resultTypeValue==='mile')
    result.value=Number(input.value)/1760;
  if(inputTypeValue==='yard' && resultTypeValue==='yard')
    result.value=Number(input.value)*1;
  if(inputTypeValue==='yard' && resultTypeValue==='foot')
    result.value=Number(input.value)*3;
  if(inputTypeValue==='yard' && resultTypeValue==='inch')
    result.value=Number(input.value)*36;
  if(inputTypeValue==='foot' && resultTypeValue==='kilometer')
    result.value=Number(input.value)/3281;
  if(inputTypeValue==='foot' && resultTypeValue==='meter')
    result.value=Number(input.value)/3.281;
  if(inputTypeValue==='foot' && resultTypeValue==='centimeter')
    result.value=Number(input.value)*30.48;
  if(inputTypeValue==='foot' && resultTypeValue==='millimeter')
    result.value=Number(input.value)*304.8;
  if(inputTypeValue==='foot' && resultTypeValue==='micrometer')
    result.value=Number(input.value)*304800;
  if(inputTypeValue==='foot' && resultTypeValue==='nanometer')
    result.value=Number(input.value)*304800000;
  if(inputTypeValue==='foot' && resultTypeValue==='mile')
    result.value=Number(input.value)/5280;
  if(inputTypeValue==='foot' && resultTypeValue==='yard')
    result.value=Number(input.value)/3;
  if(inputTypeValue==='foot' && resultTypeValue==='foot')
    result.value=Number(input.value)*1;
  if(inputTypeValue==='foot' && resultTypeValue==='inch')
    result.value=Number(input.value)*12;
  if(inputTypeValue==='inch' && resultTypeValue==='kilometer')
    result.value=Number(input.value)/39370;
  if(inputTypeValue==='inch' && resultTypeValue==='meter')
    result.value=Number(input.value)/39.37;
  if(inputTypeValue==='inch' && resultTypeValue==='centimeter')
    result.value=Number(input.value)*2.54;
  if(inputTypeValue==='inch' && resultTypeValue==='millimeter')
    result.value=Number(input.value)*25.4;
  if(inputTypeValue==='inch' && resultTypeValue==='micrometer')
    result.value=Number(input.value)*25400;
  if(inputTypeValue==='inch' && resultTypeValue==='nanometer')
    result.value=Number(input.value)*25400000;
  if(inputTypeValue==='inch' && resultTypeValue==='mile')
    result.value=Number(input.value)/63360;
  if(inputTypeValue==='inch' && resultTypeValue==='yard')
    result.value=Number(input.value)/36;
  if(inputTypeValue==='inch' && resultTypeValue==='foot')
    result.value=Number(input.value)/12;
  if(inputTypeValue==='inch' && resultTypeValue==='inch')
    result.value=Number(input.value)*1;
  if(inputTypeValue==='tonne' && resultTypeValue==='tonne')
    result.value=Number(input.value)*1;
  if(inputTypeValue==='tonne' && resultTypeValue==='kilogram')
    result.value=Number(input.value)*1000;
  if(inputTypeValue==='tonne' && resultTypeValue==='gram')
    result.value=Number(input.value)*1000000;
  if(inputTypeValue==='tonne' && resultTypeValue==='milligram')
    result.value=Number(input.value)*1000000000;
  if(inputTypeValue==='tonne' && resultTypeValue==='microgram')
    result.value=Number(input.value)*1000000000;
  if(inputTypeValue==='tonne' && resultTypeValue==='pound')
    result.value=Number(input.value)*2205;
  if(inputTypeValue==='tonne' && resultTypeValue==='ounce')
    result.value=Number(input.value)*35274;
  if(inputTypeValue==='kilogram' && resultTypeValue==='tonne')
    result.value=Number(input.value)*0.001;
  if(inputTypeValue==='kilogram' && resultTypeValue==='kilogram')
    result.value=Number(input.value)*1;
  if(inputTypeValue==='kilogram' && resultTypeValue==='gram')
    result.value=Number(input.value)*1000;
  if(inputTypeValue==='kilogram' && resultTypeValue==='milligram')
    result.value=Number(input.value)*1000000;
  if(inputTypeValue==='kilogram' && resultTypeValue==='microgram')
    result.value=Number(input.value)*1000000000;
  if(inputTypeValue==='kilogram' && resultTypeValue==='pound')
    result.value=Number(input.value)*2.205;
  if(inputTypeValue==='kilogram' && resultTypeValue==='ounce')
    result.value=Number(input.value)*35.274;
  if(inputTypeValue==='gram' && resultTypeValue==='tonne')
    result.value=Number(input.value)*0.000001;
  if(inputTypeValue==='gram' && resultTypeValue==='kilogram')
    result.value=Number(input.value)*0.001;
  if(inputTypeValue==='gram' && resultTypeValue==='gram')
    result.value=Number(input.value)*1;
  if(inputTypeValue==='gram' && resultTypeValue==='milligram')
    result.value=Number(input.value)*1000;
  if(inputTypeValue==='gram' && resultTypeValue==='microgram')
    result.value=Number(input.value)*1000000;
  if(inputTypeValue==='gram' && resultTypeValue==='pound')
    result.value=Number(input.value)/454;
  if(inputTypeValue==='gram' && resultTypeValue==='ounce')
    result.value=Number(input.value)/28.35;
  if(inputTypeValue==='milligram' && resultTypeValue==='tonne')
    result.value=Number(input.value)*0.000000001;
  if(inputTypeValue==='milligram' && resultTypeValue==='kilogram')
    result.value=Number(input.value)*0.000001;
  if(inputTypeValue==='milligram' && resultTypeValue==='gram')
    result.value=Number(input.value)*0.001;
  if(inputTypeValue==='milligram' && resultTypeValue==='milligram')
    result.value=Number(input.value)*1;
  if(inputTypeValue==='milligram' && resultTypeValue==='microgram')
    result.value=Number(input.value)*1000;
  if(inputTypeValue==='milligram' && resultTypeValue==='pound')
    result.value=Number(input.value)/453592;
  if(inputTypeValue==='milligram' && resultTypeValue==='ounce')
    result.value=Number(input.value)/28350;
  if(inputTypeValue==='microgram' && resultTypeValue==='tonne')
    result.value=Number(input.value)*0.000000000001;
  if(inputTypeValue==='microgram' && resultTypeValue==='kilogram')
    result.value=Number(input.value)*0.000000001;
  if(inputTypeValue==='microgram' && resultTypeValue==='gram')
    result.value=Number(input.value)*0.000001;
  if(inputTypeValue==='microgram' && resultTypeValue==='milligram')
    result.value=Number(input.value)*0.001;
  if(inputTypeValue==='microgram' && resultTypeValue==='microgram')
    result.value=Number(input.value)*1;
  if(inputTypeValue==='microgram' && resultTypeValue==='pound')
    result.value=Number(input.value)/453600000;
  if(inputTypeValue==='microgram' && resultTypeValue==='ounce')
    result.value=Number(input.value)/28350000;
  if(inputTypeValue==='pound' && resultTypeValue==='tonne')
    result.value=Number(input.value)/2205;
  if(inputTypeValue==='pound' && resultTypeValue==='kilogram')
    result.value=Number(input.value)/2.205;
  if(inputTypeValue==='pound' && resultTypeValue==='gram')
    result.value=Number(input.value)*454;
  if(inputTypeValue==='pound' && resultTypeValue==='milligram')
    result.value=Number(input.value)*453592;
  if(inputTypeValue==='pound' && resultTypeValue==='microgram')
    result.value=Number(input.value)*453600000;
  if(inputTypeValue==='pound' && resultTypeValue==='pound')
    result.value=Number(input.value)*1;
  if(inputTypeValue==='pound' && resultTypeValue==='ounce')
    result.value=Number(input.value)*16;
  if(inputTypeValue==='ounce' && resultTypeValue==='tonne')
    result.value=Number(input.value)/35274;
  if(inputTypeValue==='ounce' && resultTypeValue==='kilogram')
    result.value=Number(input.value)/35.274;
  if(inputTypeValue==='ounce' && resultTypeValue==='gram')
    result.value=Number(input.value)*28.35;
  if(inputTypeValue==='ounce' && resultTypeValue==='milligram')
    result.value=Number(input.value)*28350;
  if(inputTypeValue==='ounce' && resultTypeValue==='microgram')
    result.value=Number(input.value)*28350000;
  if(inputTypeValue==='ounce' && resultTypeValue==='pound')
    result.value=Number(input.value)/16;
  if(inputTypeValue==='ounce' && resultTypeValue==='ounce')
    result.value=Number(input.value)*1;

  if(inputTypeValue==='hertz' && resultTypeValue==='hertz')
    result.value=Number(input.value)*1;
  if(inputTypeValue==='hertz' && resultTypeValue==='kilohertz')
    result.value=Number(input.value)*0.001;
  if(inputTypeValue==='hertz' && resultTypeValue==='megahertz')
    result.value=Number(input.value)*0.000001;
  if(inputTypeValue==='hertz' && resultTypeValue==='gigahertz')
    result.value=Number(input.value)*0.000000001;
  if(inputTypeValue==='kilohertz' && resultTypeValue==='hertz')
    result.value=Number(input.value)*1000;
  if(inputTypeValue==='kilohertz' && resultTypeValue==='kilohertz')
    result.value=Number(input.value)*1;
  if(inputTypeValue==='kilohertz' && resultTypeValue==='megahertz')
    result.value=Number(input.value)*0.001;
  if(inputTypeValue==='kilohertz' && resultTypeValue==='gigahertz')
    result.value=Number(input.value)*0.000001;
  if(inputTypeValue==='megahertz' && resultTypeValue==='hertz')
    result.value=Number(input.value)*1000000;
  if(inputTypeValue==='megahertz' && resultTypeValue==='kilohertz')
    result.value=Number(input.value)*1000;
  if(inputTypeValue==='megahertz' && resultTypeValue==='megahertz')
    result.value=Number(input.value)*1;
  if(inputTypeValue==='megahertz' && resultTypeValue==='gigahertz')
    result.value=Number(input.value)*0.001;
  if(inputTypeValue==='gigahertz' && resultTypeValue==='hertz')
    result.value=Number(input.value)*1000000000;
  if(inputTypeValue==='gigahertz' && resultTypeValue==='kilohertz')
    result.value=Number(input.value)*1000000;
  if(inputTypeValue==='gigahertz' && resultTypeValue==='megahertz')
    result.value=Number(input.value)*1000;
  if(inputTypeValue==='gigahertz' && resultTypeValue==='gigahertz')
    result.value=Number(input.value)*1;
  if(inputTypeValue==='bar' && resultTypeValue==='bar')
    result.value=Number(input.value)*1;
  if(inputTypeValue==='bar' && resultTypeValue==='pascal')
    result.value=Number(input.value)*100000;
  if(inputTypeValue==='bar' && resultTypeValue==='standard atmosphere')
    result.value=Number(input.value)/1.013;
  if(inputTypeValue==='bar' && resultTypeValue==='torr')
    result.value=Number(input.value)*750;
  if(inputTypeValue==='pascal' && resultTypeValue==='bar')
    result.value=Number(input.value)*0.00001;
  if(inputTypeValue==='pascal' && resultTypeValue==='pascal')
    result.value=Number(input.value)*1;
  if(inputTypeValue==='pascal' && resultTypeValue==='standard atmosphere')
    result.value=Number(input.value)/101325;
  if(inputTypeValue==='pascal' && resultTypeValue==='torr')
    result.value=Number(input.value)/133;
  if(inputTypeValue==='standard atmosphere' && resultTypeValue==='bar')
    result.value=Number(input.value)*1.013;
  if(inputTypeValue==='standard atmosphere' && resultTypeValue==='pascal')
    result.value=Number(input.value)*101325;
    if(inputTypeValue==='standard atmosphere' && resultTypeValue==='standard atmosphere')
      result.value=Number(input.value)*1;
    if(inputTypeValue==='standard atmosphere' && resultTypeValue==='torr')
      result.value=Number(input.value)*760;
    if(inputTypeValue==='torr' && resultTypeValue==='bar')
      result.value=Number(input.value)/750;
    if(inputTypeValue==='torr' && resultTypeValue==='pascal')
      result.value=Number(input.value)*133;
    if(inputTypeValue==='torr' && resultTypeValue==='standard atmosphere')
      result.value=Number(input.value)/760;
    if(inputTypeValue==='torr' && resultTypeValue==='torr')
      result.value=Number(input.value)*1;
    if(inputTypeValue==='celsius' && resultTypeValue==='celsius')
      result.value=Number(input.value)*1;
    if(inputTypeValue==='celsius' && resultTypeValue==='fahrenheit')
      result.value=Number(input.value)*(9/5)+32;
    if(inputTypeValue==='celsius' && resultTypeValue==='kelvin')
      result.value=Number(input.value)+273.15;
    if(inputTypeValue==='fahrenheit' && resultTypeValue==='celsius')
      result.value=(Number(input.value)-32)*(5/9);
    if(inputTypeValue==='fahrenheit' && resultTypeValue==='fahrenheit')
      result.value=Number(input.value)*1;
    if(inputTypeValue==='fahrenheit' && resultTypeValue==='kelvin')
      result.value=(Number(input.value)-32)*(5/9)+273.15;
    if(inputTypeValue==='kelvin' && resultTypeValue==='celsius')
      result.value=Number(input.value)-273.15;
    if(inputTypeValue==='kelvin' && resultTypeValue==='fahrenheit')
      result.value=(Number(input.value)-273.15)*(9/5)+32;
    if(inputTypeValue==='kelvin' && resultTypeValue==='kelvin')
      result.value=Number(input.value)*1;
    if(inputTypeValue==='cubic meter' && resultTypeValue==='cubic meter')
      result.value=Number(input.value)*1;
    if(inputTypeValue==='cubic meter' && resultTypeValue==='liter')
      result.value=Number(input.value)*1000;
    if(inputTypeValue==='cubic meter' && resultTypeValue==='milliliter')
      result.value=Number(input.value)*1000000;
    if(inputTypeValue==='liter' && resultTypeValue==='cubic meter')
      result.value=Number(input.value)*0.001;
    if(inputTypeValue==='liter' && resultTypeValue==='liter')
      result.value=Number(input.value)*1;
    if(inputTypeValue==='liter' && resultTypeValue==='milliliter')
      result.value=Number(input.value)*1000;
    if(inputTypeValue==='milliliter' && resultTypeValue==='cubic meter')
      result.value=Number(input.value)*0.000001;
    if(inputTypeValue==='milliliter' && resultTypeValue==='liter')
      result.value=Number(input.value)*0.001;
    if(inputTypeValue==='milliliter' && resultTypeValue==='milliliter')
      result.value=Number(input.value)*1;





}
function onselection()
{
  var x=document.getElementById('measure').value;
  console.log(x);
   document.getElementById("heading").innerHTML =x+" converter";
   var e=document.getElementById("inputType");
   var c = e.options;
   var y=document.getElementById("resultType");
   var z=y.options;
   console.log(e);

   for(var child in c)
   {

     e.remove(child);

   }
   for(var child in y)
   {
     y.remove(child);
   }
   for( var opt of mylist[x])
   {
     var newOption=document.createElement('option');
     newOption.value=opt;
     newOption.text=opt;

     e.add(newOption);
   }
   for(var opt of mylist[x])
   {
     var newOption=document.createElement('option');
     newOption.value=opt;
     newOption.text=opt;

     y.add(newOption);

   }

}
