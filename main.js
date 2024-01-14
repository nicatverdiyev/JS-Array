// Task-01
// Massiv elementinin dəyərini dəyişin.
// Üç addan ibarət massiv yaradın.
// Massivin ikinci elementinin dəyərini “Classified” ilə əvəz edin.
// Massivi konsola çıxarın.

// let names = ["Nicat", "Elvin", "Teyyub"];
// names[1] = "Classified";
// console.log(names);

// TASK-02
// Massiv verilib. "Episode 4: New Hope" kimi mesajları ardıcıl olaraq konsola çıxarın.
// Massiv elementlərin düzün.

// let arr = ['New Hope', 'The Empire Strikes Back', 'Return of the Jdi'];
//Episode 4: New Hope
//Episode 5: Empire strikes back
//Episode 6: Return of the Jdi

// let arr = ['New Hope', 'The Empire Strikes Back', 'Return of the Jedi'];
// for (let i = 0; i < arr.length; i++) {
//   console.log(`Episode ${i + 4}: ${arr[i]}`);
// }


// Task-04
// İstifadəçidən vergüllə ayrılmış beş ədədi daxil etməyi xahiş edin və onları massivdə saxlayın.
// İstifadəçidən beş ədəd elementi daxil etməyi tələb edən, onları massilə yazan və ən kiçik ədədi konsola çıxaran proqram yazın.(Split)

// const input = '42,61,74,26,55,60,10'
// const getMinNum = function (param) {
//   let paramArr = param.split(',')
//   let min = paramArr[0]
//   console.log(min)
//   for (const num of paramArr) {
//     if (num < min) min = num
//   }
//   return min
// }
// const minNum = getMinNum(input)
// console.log(minNum)


// Task-05
// Verilən mətn tip dəyərdəki vergülləri nöqtəli vergüllə əvəz edin.(split,join)(replaceAll(",",";"))
// '32, 31, 34, 36, 31' mətni verilmişdir ,İçindəki vergülləri nöqtəli vergüllə əvəz edin.(Massivden sitifade ederek)
//  const str = '32, 31, 34, 36, 31'
// console.log(str.split(',').join(';'))
//  console.log(str.replaceAll(',', ';'))
