const root = document.querySelector(".table");
fetch("https://jsonplaceholder.typicode.com/users")
  .then((res) => res.json())
  .then((users) =>
    users.forEach((user, index) => {
      if (index % 2 != 0) {
        root.innerHTML += `
        <tr class="green">
          <td>${user.id}</td>
          <td>${user.name}</td>
          <td>${user.username}</td>
          <td>${user.phone}</td>
          <td>${user.company.name}</td>
          <td>${user.email}</td>
          <td>${user.address.city}</td>
          <td>${user.address.zipcode}</td>
          </tr>`;
      } else if (index % 2 == 0) {
        root.innerHTML += `
          <tr class="white">
          <td>${user.id}</td>
          <td>${user.name}</td>
          <td>${user.username}</td>
          <td>${user.phone}</td>
          <td>${user.company.name}</td>
          <td>${user.email}</td>
          <td>${user.address.city}</td>
          <td>${user.address.zipcode}</td>
      </tr>`;
      }
    })
  );
