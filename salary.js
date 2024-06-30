function calculateNetSalary(basicSalary, benefits) {
    // constants for the rates
    const taxRate = 0.3;
    const nhifRate = 0.025;
    const nsssfRate = 0.06;

    // calc gross salary
    let grossSalary = basicSalary + benefits;

    // calc deductions
    let taxDeduction = grossSalary * taxRate;
    let nhifDeduction = grossSalary * nhifRate;
    let nssfDeduction = grossSalary * nsssfRate;

    // calc net salary
    let netSalary = grossSalary - taxDeduction - nhifDeduction - nssfDeduction;
    return {
        grossSalary: grossSalary,
        taxDeduction: taxDeduction,
        nhifDeduction: nhifDeduction,
        nssfDeduction: nssfDeduction,
        netSalary: netSalary,
    };
}
