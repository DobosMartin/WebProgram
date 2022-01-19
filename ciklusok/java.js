document.write("1.Feladat: ");
for( i=1; i<=20; i=i+1 )
	{
		document.write( i, ' ' )
    }
document.write('<br/>');
document.write("2.Feladat: ")
for( i=2; i<=30; i=i+2 )
	{
		document.write( i, ' ' )
    }
document.write('<br/>');
document.write("3.Feladat: ")
for( i=30; i<=100; i=i+7 )
	{
		document.write( i, ' ' )
    }
document.write('<br/>');
document.write("4.Feladat: ")
for( i=112; i>=2; i=i-11 )
    {
        document.write( i, ' ' )
    }
document.write('<br/>');
document.write("5.Feladat: ")
for( i=-90; i<=90; i=i+15 )
    {
        document.write( i, ' ' )
    }
document.write('<br/>');
document.write("6.Feladat: ")
for( i=1; i<=9; i=i+1 )
    {
        k= 10-i;
        document.write( i, k, ' ' )
    }
document.write('<br/>');
document.write("7.Feladat: ")
for( i=1; i<=9; i=i+1 )
    {
        k = 18-i;
        document.write( i, '-', k , '  ' )
    }
document.write('<br/>');
document.write("8.Feladat: <br/>")
for( i=1; i<=10; i=i+1 )
    {
        a = i * 8 ;
        document.write( i, '* 8 =' , a , '<br/>',  )
    }
document.write('<br/>');
document.write("9.Feladat: ")
for( i=1; i<=15; i=i+1 )
    {
        c = i * i;
        document.write(c, '  ' )
    }
document.write('<br/>');
document.write("10.Feladat: ")
for( i=2022; i<=2041; i=i+1 )
    {
        if(i%4==0)
        {
           
        }
        else
        {
            document.write( i, '  ' )
        }
    }
document.write('<br/>');
document.write("11.Feladat: ")
for( i=1; i<=144; i=i+1 )
	{
        if(144%i==0)
        {
            document.write( i, ' ' )
        }
		
    }
document.write('<br/>');
document.write("12.Feladat: ")
for( i=1; i<=1048576; i=i*2 )
    {
        document.write(i, ' ' )
    }
document.write('<br/>');
document.write("13.Feladat: ")
k=1
for( i=1; i<=26; i=i+1 )
    {
        k=i+k
        document.write( k, '  ' )
    }
document.write('<br/>');
document.write("14.Feladat: ")
e = 1;
c = 2;
document.write( e ,'  ' )
document.write( c ,'  ' )
for( i=3; i<=18; i++ )
    {
        a = e+c
        document.write( a ,'  ' )
        e = c
        c = a
    }
document.write('<br/>');
document.write("15.Feladat: ")
for( i=8*60+15; i<=16*60+15; i=i+60 )
    {
        p=i%60
        o=Math.floor(i/60)
        if(o<10)
        {
            o = '0' + o
        }
        if(p<10)
        {
            p = '0' + p
        }
        document.write( o, ':', p, '  ' )
    }
document.write('<br/>');
document.write("16.Feladat: ")
for( i=8*60; i<=12*60+20; i=i+20 )
    {
        p=i%60
        o=Math.floor(i/60)
        if(o<10)
        {
            o = '0' + o
        }
        if(p<10)
        {
           p = '0' + p
        }
            document.write( o, ':', p, '  ' )
    }
document.write('<br/>');
document.write("17.Feladat: <br> ")
for( i=8*60; i<=18*60; i=i+50 )
    {
        p=i%60
        o=Math.floor(i/60)
        if(o<10)
        {
            o = '0' + o
        }
        if(p<10)
        {
            p = '0' + p
        }
        document.write( o, ':', p, ' </br> ' )
    }

document.write('<br/>');
document.write("18.Feladat: <br>")
for( i=8*60+30; i<=15*60; i=i+45 )
    {
        p=i%60
        o=Math.floor(i/60)
        if(o<10)
        {
            o = '0' + o
        }
        if(p<10)
        {
            p = '0' + p
        }
        document.write(o, ':', p, '<br>' )
    }

document.write('<br/>');
document.write("19.Feladat: <br>")
document.write('<table border=2 id="lotto"> <tr>')
for( i=1; i<=90; i++ )
    {
        document.write('<td>',i, '</td>' )
        if(i%10 == 0)
         {
         document.write('</tr><tr>')
         }
         
    }
    document.write('</tr>')
    document.write('</table>')

document.write('<br/>');
document.write("20.Feladat: <br>")
document.write('<table border=2 id="naptar">')
for( i=-4; i<=31; i++ )
    {
        
        if (i<1)
        {
        document.write('<tr>',i,'</tr>')
        }
        if(i%7 == 0)
        {
        document.write('<br>')
        }   
    }
    document.write('</table>')
