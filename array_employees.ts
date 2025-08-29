// array_employees.ts
// งานที่ 1: ระบบจัดการข้อมูลพนักงาน

interface Employee {
    id: number;
    name: string;
    position: string;
    salary: number;
}

const employees: Employee[] = [
    { id: 1, name: "สมใจ ดั่งฝันนิ", position: "นักพัฒนา", salary: 45000 },
    { id: 2, name: "สุด ทางพร้าว", position: "นักออกแบบ", salary: 38000 },
    { id: 3, name: "หลวงจง ยวบๆ", position: "ผู้จัดการ", salary: 55000 },
    { id: 4, name: "หมู ขี้พร้า", position: "นักวิเคราะห์ข้อมูล", salary: 42000 }
];

function findEmployeeByName(name: string): Employee | undefined {
    const searchName = name.trim().toLowerCase();
    return employees.find(emp => 
        emp.name.toLowerCase().includes(searchName)
    );
}

function displayAllEmployees(): void {
    console.log("=== รายชื่อพนักงานทั้งหมด ===");
    employees.forEach(emp => {
        console.log(`รหัส: ${emp.id} | ชื่อ: ${emp.name} | ตำแหน่ง: ${emp.position} | เงินเดือน: ${emp.salary.toLocaleString()} บาท`);
    });
    console.log();
}

function searchAndDisplayEmployee(searchName: string): void {
    console.log(`=== ค้นหาพนักงานชื่อ: "${searchName}" ===`);
    const foundEmployee = findEmployeeByName(searchName);
    
    if (foundEmployee) {
        console.log("พบพนักงาน:");
        console.log(`รหัส: ${foundEmployee.id} | ชื่อ: ${foundEmployee.name} | ตำแหน่ง: ${foundEmployee.position} | เงินเดือน: ${foundEmployee.salary.toLocaleString()} บาท`);
    } else {
        console.log("ไม่พบพนักงานที่ค้นหา");
    }
    console.log();
}

console.log("========== งานที่ 1: ระบบจัดการพนักงาน ==========\n");

displayAllEmployees();

searchAndDisplayEmployee("สมใจ");
searchAndDisplayEmployee("หมู");
searchAndDisplayEmployee("สาธร");