let countEl= 'document'.getElementById("count-el")
let count=0
function increment()
{
    count=count+1
    countEl.innertext = count
}
 
function save()
{
    console.log(count)
}
save()