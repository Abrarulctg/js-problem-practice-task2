/**
 * For each employee their current salary is calculated by multiplying yearly increment with experience then adding the result to the starting salary. Now calculate is the total salary has to be provided by the company in a month.


 */


function calculateMonthlyTotalSalary(employeeList) {
    let totalMonthlySalary = 0;
    for (const employee of employeeList) {
        const startingSalary = employee.starting;
        const experience = employee.experience;
        const salaryIncrement = employee.increment;

        let currentSalary = startingSalary + (experience * salaryIncrement);
        totalMonthlySalary = totalMonthlySalary + currentSalary;
    }
    return totalMonthlySalary;


}

const employees = [
    { name: "shahin", experience: 5, starting: 20000, increment: 5000 },
    { name: "shihab", experience: 3, starting: 15000, increment: 7000 },
    { name: "shikot", experience: 9, starting: 30000, increment: 1000 },
    { name: "shohel", experience: 0, starting: 29000, increment: 4000 },
    { name: "abrar", experience: 10, starting: 30000, increment: 5000 },
];


const totalSalary = calculateMonthlyTotalSalary(employees);

console.log(totalSalary);