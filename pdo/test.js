var xmlHttp
function showsimple()
{
	var cont=document.getElementById("searchtxt").value;
if (cont=="")
 { 
 alert('��ѯ�ؼ��ֲ���Ϊ��');
 //document.getElementById("webpage").innerHTML=""
 return
 }
//��ȡxmlHttpObject�������Ϊ�գ���ʾ�������֧��ajax
xmlHttp=GetXmlHttpObject()
if (xmlHttp==null)
 {
 alert ("Browser does not support HTTP Request")
 return
 } 
 //��ȡurl
var url="searchrst.php"
url=url+"?cont="+cont
url=url+"&sid="+Math.random()
 //�ص�������ִ�ж���
xmlHttp.onreadystatechange=stateChanged 
 //open
xmlHttp.open("GET",url,true)
xmlHttp.send(null)
}
function stateChanged() 
{ 
if (xmlHttp.readyState==4 || xmlHttp.readyState=="complete")
{ 
//����ȡ����Ϣ���뵽txtHint��
document.getElementById("webpage").innerHTML=xmlHttp.responseText 
} 
}

//��ȡxml����
function GetXmlHttpObject()
{
var xmlHttp=null;
try
{
// Firefox, Opera 8.0+, Safari
xmlHttp=new XMLHttpRequest();
}
catch (e)
{
// Internet Explorer
try
 {
 xmlHttp=new ActiveXObject("Msxml2.XMLHTTP");
 }
catch (e)
 {
 xmlHttp=new ActiveXObject("Microsoft.XMLHTTP");
 }
}
return xmlHttp;
}// JavaScript Document