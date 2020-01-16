//Simple Example of functions and variables in JS

function add (first,second)
{
    return first + second;
}

var sum = add(1,2);
alert(sum);
//can also call alert( add(1,2) );

function go(name,age)
{
    if (age > 20)
    {
        return name+'!';
    }
    else
    {
        return name;
    }
}
alert(go("Eric",28));

//Note that function will report undefined if there is no return