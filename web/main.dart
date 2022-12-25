import 'dart:html';
import 'dart:math';

void main() {
  var randomGenerator = new Random();
  int randomNum = randomGenerator.nextInt(100);
  querySelector('#RipVanWinkle')!.innerHtml =
      '''The server is started successfully<br/> 
      Random Number: $randomNum<br/> 
      姓名：曾程<br/> 
      学号：20191060222<br/> 
      学院：信息学院''';
}
