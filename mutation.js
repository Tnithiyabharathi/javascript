function mutation(arr) {
    const test = arr[1].toLowerCase();
    const target = arr[0].toUpperCase();
    for(let i = 0;i < test.length; i++){
      if(target.indexOf(test[1])< 0)
      return false;
    }return true;
  }
  mutation(["hello", "hey"]);