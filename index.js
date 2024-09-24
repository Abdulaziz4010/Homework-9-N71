// users nomli arrey ichidan id ga teng bo'lmaganlarini boshqa bir arreyga olish 


// const nomliArray = [
//     { id: 1, name: 'Ali' },
//     { id: 2, name: 'Vali' },
//     { id: 3, name: 'Hasan' },
//     { id: 4, name: 'Husan' }
//   ];
  
//   const id = 2; 
  
//   const filterArray = nomliArray.filter(item => item.id !== id);
  
//   console.log(filterArray);
  



// users nomli array ichidagi userlar ismlarini boshqa bir arreyga yeg'ish

// const users = [
//     { id: 1, name: 'Ali' },
//     { id: 2, name: 'Vali' },
//     { id: 3, name: 'Hasan' },
//     { id: 4, name: 'Husan' }
//   ];
  
//   const namesArray = users.map(user => user.name);
  
//   console.log(namesArray);
  
// users nomli array ichidan user larni addressni olib unga qo'shib ism va idlarini olish unagi arrey yordamida 

// const users = [
//     { id: 1, name: 'Ali', address: 'Tashkent' },
//     { id: 2, name: 'Vali', address: 'Samarkand' },
//     { id: 3, name: 'Hasan', address: 'Bukhara' },
//     { id: 4, name: 'Husan', address: 'Khiva' }
//   ];
  
//   const resultArray = users.map(user => ({
//     id: user.id,
//     name: user.name,
//     address: user.address
//   }));
  
//   console.log(resultArray);
  
// users nomli arreay ichidagi id ga teng bo'lgan userni topish

// const users = [
//     { id: 1, name: 'Ali', address: 'Tashkent' },
//     { id: 2, name: 'Vali', address: 'Samarkand' },
//     { id: 3, name: 'Hasan', address: 'Bukhara' },
//     { id: 4, name: 'Husan', address: 'Khiva' }
//   ];
  
//   const id = 3;
  
//   const foundUser = users.find(user => user.id === id);
  
//   console.log(foundUser);
  
// arrey ichidagi id ga teng bo'lgan elementni o'chirish 

// const users = [
//     { id: 1, name: 'Ali', address: 'Tashkent' },
//     { id: 2, name: 'Vali', address: 'Samarkand' },
//     { id: 3, name: 'Hasan', address: 'Bukhara' },
//     { id: 4, name: 'Husan', address: 'Khiva' }
//   ];
  
//   const Remove = 3; 
  
//   const updatedUsers = users.filter(user => user.id !== Remove);
  
//   console.log(updatedUsers);
  
// // arrey ichiga user larni oyligini kiritish va uni xissoblash

// const users = [
//     { id: 1, name: 'Ali', address: 'Tashkent', salary: 1200 },
//     { id: 2, name: 'Vali', address: 'Samarkand', salary: 1500 },
//     { id: 3, name: 'Hasan', address: 'Bukhara', salary: 1300 },
//     { id: 4, name: 'Husan', address: 'Khiva', salary: 1400 }
//   ];
  
//   const totalSalary = users.reduce((total, user) => total + user.salary, 0);
  
//   console.log(`Umumiy oylik: ${totalSalary}`);
  