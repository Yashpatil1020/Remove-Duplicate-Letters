var removeDuplicateLetters = function(s) {
    let lastIndex=new Array(26).fill(-1);
    let visited=new Array(26).fill(false);
    for(let i=0; i<s.length; i++){
        lastIndex[s.charCodeAt(i)-97]=i;
    }
    const stack=[];
    for(let i=0; i<s.length; i++){
        let ch=s[i];
        if(visited[s.charCodeAt(i)-97]){
            continue;
        }
        while(stack.length>0 && stack[stack.length-1]>ch &&
        lastIndex[stack[stack.length-1].charCodeAt(0)-97]>i){
            let removedChar=stack.pop();
            visited[removedChar.charCodeAt(0)- 97]=false;
        }
        stack.push(ch);
        visited[s.charCodeAt(i)-97]=true;
    }
    return stack.join('');
};