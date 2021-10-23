var simplifyPath = function (path) {
  try {
    const pathSplit = path.split(`/`);
    const arr = new Array();

    console.log(`pathSplit : ${pathSplit}`);
    for (let i = 0; i < pathSplit.length; i++) {
      if (pathSplit[i] === ``) {
        console.log(`case 0 '' `);
        if (arr.length > 0 && arr[arr.length - 1] === `/`) {
          continue;
        }

        arr.push(`/`);
      } else if (pathSplit[i] === `.`) {
        console.log(`case 2 .`);
      } else if (pathSplit[i] === `..`) {
        console.log(`case 3 ..`);
        if (arr[arr.length - 1] === `/`) {
          arr.pop();
        }
        arr.pop();
      } else {
        console.log(`case 5 etc`);
        if (arr[arr.length - 1] !== `/`) {
          arr.push(`/` + pathSplit[i]);
        } else {
          arr.push(pathSplit[i]);
        }
      }

      console.log(`------- arr : ${arr.join('')}`);
    }

    if (arr.length === 0) {
      return;
    } else if (arr.length > 1 && arr[arr.length - 1] === `/`) {
      arr.pop();
    }

    return arr.join('');
  } catch (err) {
    console.log(`err >>> ${err}`);
  }
};

// const path = "/home/"
// const path = "/../"
// const path = "/home//foo/"
// const path = "/a/./b/../../c/"
// const path = "/a/../../b/../c//.//"
// const path = "/a//b////c/d//././/.."
const path = '/..';

const result = simplifyPath(path);
console.log(`result >>> ${result}`);
