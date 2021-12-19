// generates page to include each employee card 

const generatePage = team => {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equip="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.7.2/font/bootstrap-icons.css">
        <title>Team Profile</title>
    </head>
    <body>
        <header class="p-3 mb-2 text-light bg-dark d-flex justify-content-center">
            <h1> All Star Team </h1>
        </header>
        <div class="container">
        <div class="row">
            ${team
                .filter(employee => employee.getRole() === 'Manager')
                .map(({ name, id, email, officeNumber}) => {
                    console.log(officeNumber);
                    return `
                    <div class="col d-flex justify-content-center">
                        <div class="card" style="width: 18rem;"> 
                            <div class="card-header bg-primary">
                                <h4 class="card-title text-light bg-dark">${name}</h4>
                                <h5 class="card-subtitle text-light bg-dark"><i class="bi bi-cup"></i>Manager</h5>
                            </div>
                            <div class="card-body bg-secondary">
                                <ul class="list-group list-group-flush">
                                    <li class="list-group-item border border-light mb-2">ID: <span class="fw-normal">${id}</span></li>
                                    <li class="list-group-item border border-light mb-2">Email: <a href="mailto:${email}" class="fw-normal">${email}</a></li>
                                    <li class="list-group-item border border-light mb-2">Office#: <span class="fw-normal">${officeNumber}</span></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    `
                }).join('')
            }
            ${team
                .filter(employee => employee.getRole() === 'Engineer')
                .map(({name, id, email, github}) => {
                    return `
                    <div class="col d-flex justify-content-center">
                        <div class="card" style="width: 18rem;">
                            <div class="card-header bg-primary">
                                <h4 class="card-title text-light bg-dark">${name}</h4>
                                <h5 class="card-subtitle text-light bg-dark"<i class="bi bi-eyeglasses"></i>Engineer</h5>
                            </div>
                            <div class="card-body bg-light">
                                <ul class="list-group list-group-flush">
                                    <li class="list-group-item border border-light mb-2">ID: <span class="fw-normal">${id}</span></li>
                                    <li class="list-group-item border border-light mb-2">Email: <a href="mailto:${email}" class="fw-normal">${email}</a></li>
                                    <li class="list-group-item border border-light mb-2">GitHub: <a href="github.com/${github}" class="fw-normal">${github}</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                     `
                }).join('')
            }
            ${team
                .filter(employee => employee.getRole() === 'Intern') 
                .map(({name, id, email, school}) => {
                    return `
                    <div class="col d-flex justify-content-center">
                    <div class="card" style="width: 18rem;">
                        <div class="card-header bg-primary">
                            <h4 class="card-title text-light bg-dark">${name}</h4>
                            <h5 class="card-subtitle text-light bg-dark"<i class="bi bi-mortarboard"></i>Intern</h5>
                        </div>
                        <div class="card-body bg-light">
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item border border-light mb-2">ID: <span class="fw-normal">${id}</span></li>
                                <li class="list-group-item border border-light mb-2">Email: <a href="mailto:${email}" class="fw-normal">${email}</a></li>
                                <li class="list-group-item border border-light mb-2">School: <span class="fw-normal">${school}</span></li>
                            </ul>
                        </div>
                    </div>
                </div>
                `
                }).join('')
            }
        </div>
    </div>
</bpdy>
</html>
 `;
};

module.exports = generatePage;