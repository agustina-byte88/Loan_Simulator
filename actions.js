/* =========================================
   LOAN SIMULATOR — APPLICATION LOGIC
========================================= */


/* =========================================
   1. TRANSLATION DATABASE
========================================= */

const translations = {

    /* ENGLISH */

    en: {

        status: "Financial Calculator",

        pageTitle: "Loan Simulator",

        pageDescription:
            "Plan your finances with precision. Calculate monthly payments and explore your loan amortization schedule.",

        loanInformation: "Loan Information",

        loanInformationDescription:
            "Enter your loan details to begin the simulation.",

        loanAmount: "Loan Amount",

        loanAmountPlaceholder: "e.g. 100000",

        loanAmountHint:
            "Enter the total amount you wish to borrow.",

        interestRate: "Interest Rate (%)",

        interestRatePlaceholder: "e.g. 12",

        interestRateHint:
            "Enter the applicable interest rate.",

        rateType: "Interest Rate Type",

        annualRate: "Effective Annual Rate (EAR)",

        monthlyRateType: "Monthly Rate",

        rateTypeHint:
            "Select how your interest rate is expressed.",

        loanTerm: "Loan Term (Months)",

        loanTermPlaceholder: "e.g. 36",

        loanTermHint:
            "Enter the total repayment period in months.",

        calculateLoan: "Calculate Loan",

        financialOverview: "Financial Overview",

        financialOverviewDescription:
            "A summary of your loan repayment.",

        monthlyPayment: "Monthly Payment",

        monthlyPaymentDescription:
            "Fixed monthly installment",

        totalInterest: "Total Interest Paid",

        totalInterestDescription:
            "Total cost of borrowing",

        totalPayment: "Total Amount Paid",

        totalPaymentDescription:
            "Principal plus interest",

        amortizationSchedule: "Amortization Schedule",

        amortizationDescription:
            "Detailed breakdown of your monthly loan repayments.",

        fixedInstallments: "Fixed Installments",

        month: "Month",

        beginningBalance: "Beginning Balance",

        interest: "Interest",

        principal: "Principal",

        remainingBalance: "Remaining Balance",

        scheduleInfo: "Loan repayment breakdown",

        exportPDF: "Export to PDF",

        print: "Print",

        footer:
            "Loan Simulator © 2026. Financial calculations made simple.",

        errorInvalid:
            "Please enter valid values. The loan amount must be positive, the interest rate cannot be negative, and the loan term must be between 1 and 1200 months.",

        errorPDF:
            "Please calculate a loan before exporting.",

        errorPDFLibrary:
            "PDF library could not be loaded. Please check your internet connection.",

        errorPrint:
            "Please calculate a loan before printing.",

        pdfTitle: "Loan Simulator",

        pdfSubtitle:
            "Financial Summary and Amortization Schedule",

        pdfLoanDetails: "Loan Details",

        pdfLoanAmount: "Loan Amount",

        pdfInputRate: "Entered Interest Rate",

        pdfRateType: "Rate Type",

        pdfAnnualRateType: "Effective Annual Rate (EAR)",

        pdfMonthlyRateType: "Monthly Rate",

        pdfLoanTerm: "Loan Term",

        pdfMonthlyPayment: "Monthly Payment",

        pdfTotalInterest: "Total Interest",

        pdfTotalPayment: "Total Amount Paid",

        pdfMonthlyRate: "Equivalent Monthly Interest Rate",

        pdfMonth: "Month",

        pdfBeginningBalance: "Beginning Balance",

        pdfInterest: "Interest",

        pdfPrincipal: "Principal",

        pdfRemainingBalance: "Remaining Balance",

        pdfGenerated: "Generated on",

        pdfPage: "Page"

    },


    /* SPANISH */

    es: {

        status: "Calculadora financiera",

        pageTitle: "Simulador de Préstamos",

        pageDescription:
            "Planifica tus finanzas con precisión. Calcula tus cuotas mensuales y consulta la tabla de amortización de tu préstamo.",

        loanInformation: "Información del Préstamo",

        loanInformationDescription:
            "Introduce los datos de tu préstamo para comenzar la simulación.",

        loanAmount: "Monto del Préstamo",

        loanAmountPlaceholder: "Ej. 100000",

        loanAmountHint:
            "Introduce el monto total que deseas solicitar.",

        interestRate: "Tasa de Interés (%)",

        interestRatePlaceholder: "Ej. 12",

        interestRateHint:
            "Introduce la tasa de interés correspondiente.",

        rateType: "Tipo de Tasa de Interés",

        annualRate: "Tasa Efectiva Anual (E.A.)",

        monthlyRateType: "Tasa Mensual",

        rateTypeHint:
            "Selecciona cómo está expresada la tasa de interés.",

        loanTerm: "Plazo del Préstamo (Meses)",

        loanTermPlaceholder: "Ej. 36",

        loanTermHint:
            "Introduce el plazo total de pago en meses.",

        calculateLoan: "Calcular Préstamo",

        financialOverview: "Resumen Financiero",

        financialOverviewDescription:
            "Resumen de los pagos correspondientes a tu préstamo.",

        monthlyPayment: "Cuota Mensual",

        monthlyPaymentDescription:
            "Cuota fija mensual",

        totalInterest: "Intereses Totales",

        totalInterestDescription:
            "Costo total del financiamiento",

        totalPayment: "Monto Total a Pagar",

        totalPaymentDescription:
            "Capital más intereses",

        amortizationSchedule: "Tabla de Amortización",

        amortizationDescription:
            "Desglose detallado de los pagos mensuales de tu préstamo.",

        fixedInstallments: "Cuotas Fijas",

        month: "Mes",

        beginningBalance: "Saldo Inicial",

        interest: "Intereses",

        principal: "Abono a Capital",

        remainingBalance: "Saldo Pendiente",

        scheduleInfo: "Desglose de los pagos del préstamo",

        exportPDF: "Exportar a PDF",

        print: "Imprimir",

        footer:
            "Loan Simulator © 2026. Cálculos financieros simplificados.",

        errorInvalid:
            "Por favor, introduce valores válidos. El monto del préstamo debe ser positivo, la tasa de interés no puede ser negativa y el plazo debe estar entre 1 y 1200 meses.",

        errorPDF:
            "Debes calcular un préstamo antes de exportar.",

        errorPDFLibrary:
            "No se pudo cargar la biblioteca PDF. Comprueba tu conexión a Internet.",

        errorPrint:
            "Debes calcular un préstamo antes de imprimir.",

        pdfTitle: "Simulador de Préstamos",

        pdfSubtitle:
            "Resumen Financiero y Tabla de Amortización",

        pdfLoanDetails: "Datos del Préstamo",

        pdfLoanAmount: "Monto del Préstamo",

        pdfInputRate: "Tasa de Interés Ingresada",

        pdfRateType: "Tipo de Tasa",

        pdfAnnualRateType: "Tasa Efectiva Anual (E.A.)",

        pdfMonthlyRateType: "Tasa Mensual",

        pdfLoanTerm: "Plazo del Préstamo",

        pdfMonthlyPayment: "Cuota Mensual",

        pdfTotalInterest: "Intereses Totales",

        pdfTotalPayment: "Monto Total a Pagar",

        pdfMonthlyRate: "Tasa de Interés Mensual Equivalente",

        pdfMonth: "Mes",

        pdfBeginningBalance: "Saldo Inicial",

        pdfInterest: "Intereses",

        pdfPrincipal: "Abono a Capital",

        pdfRemainingBalance: "Saldo Pendiente",

        pdfGenerated: "Generado el",

        pdfPage: "Página"

    }

};


/* =========================================
   2. GLOBAL VARIABLES
========================================= */

let currentLanguage = "en";

let amortizationData = [];

let loanSummary = {};

let loanInputs = {};


/* =========================================
   3. DOM HELPERS
========================================= */

const getElement = (id) => document.getElementById(id);


function translate(key) {

    return translations[currentLanguage]?.[key] || key;

}


/* =========================================
   4. REGIONAL NUMBER FORMATTING
========================================= */

function formatNumber(number) {

    const locale =
        currentLanguage === "es"
            ? "es-CO"
            : "en-US";

    return new Intl.NumberFormat(locale, {

        minimumFractionDigits: 2,

        maximumFractionDigits: 2

    }).format(number);

}


function formatPercentage(number) {

    const locale =
        currentLanguage === "es"
            ? "es-CO"
            : "en-US";

    return new Intl.NumberFormat(locale, {

        minimumFractionDigits: 2,

        maximumFractionDigits: 6

    }).format(number) + "%";

}


function formatDate(date) {

    const locale =
        currentLanguage === "es"
            ? "es-CO"
            : "en-US";

    return new Intl.DateTimeFormat(locale, {

        dateStyle: "long"

    }).format(date);

}


/* =========================================
   5. LANGUAGE MANAGEMENT
========================================= */

function changeLanguage(language) {

    if (!translations[language]) return;

    currentLanguage = language;

    document.documentElement.lang = language;


    // UPDATE PAGE TITLE

    document.title =
        language === "es"
            ? "Simulador de Préstamos | Panel Financiero"
            : "Loan Simulator | Financial Dashboard";


    // SAVE LANGUAGE PREFERENCE

    try {

        localStorage.setItem(
            "loanSimulatorLanguage",
            language
        );

    } catch (error) {

        // Application remains functional if storage is unavailable.

    }


    // UPDATE TRANSLATABLE ELEMENTS

    document.querySelectorAll("[data-i18n]").forEach(element => {

        element.textContent = translate(element.dataset.i18n);

    });


    // UPDATE PLACEHOLDERS

    document.querySelectorAll("[data-i18n-placeholder]").forEach(element => {

        element.placeholder = translate(
            element.dataset.i18nPlaceholder
        );

    });


    // UPDATE LANGUAGE SELECTOR

    getElement("languageSelector").value = language;


    // UPDATE RESULTS WITHOUT RECALCULATING

    if (amortizationData.length > 0) {

        updateResultsDisplay();

        generateTable();

        updateScheduleInfo();

        updatePrintDetails();

    }


    // UPDATE ICONS

    if (window.lucide) {

        window.lucide.createIcons();

    }

}


/* =========================================
   6. INITIALIZE LANGUAGE
========================================= */

function initializeLanguage() {

    let savedLanguage = "en";

    try {

        savedLanguage =
            localStorage.getItem("loanSimulatorLanguage") || "en";

    } catch (error) {

        // Default to English.

    }


    const initialLanguage =
        translations[savedLanguage]
            ? savedLanguage
            : "en";


    changeLanguage(initialLanguage);

}


/* =========================================
   7. EVENT LISTENERS
========================================= */

function initializeEventListeners() {


    // LANGUAGE SELECTOR

    getElement("languageSelector").addEventListener(
        "change",
        function(event) {

            changeLanguage(event.target.value);

        }
    );


    // LOAN FORM

    getElement("loanForm").addEventListener(
        "submit",
        function(event) {

            event.preventDefault();

            calculateLoan();

        }
    );


    // PDF EXPORT

    getElement("exportPdfButton").addEventListener(
        "click",
        exportPDF
    );


    // PRINT

    getElement("printButton").addEventListener(
        "click",
        printSimulation
    );

}


/* =========================================
   8. FINANCIAL CALCULATIONS
========================================= */

function calculateLoan() {


    // GET INPUT VALUES

    const principal = Number(
        getElement("loanAmount").value
    );

    const inputRate = Number(
        getElement("interestRate").value
    );

    const rateType =
        getElement("rateType").value;

    const months = Number(
        getElement("loanTerm").value
    );

    const errorMessage =
        getElement("errorMessage");


    errorMessage.style.display = "none";

    errorMessage.textContent = "";


    // VALIDATION

    if (

        !Number.isFinite(principal) ||

        !Number.isFinite(inputRate) ||

        !Number.isInteger(months) ||

        principal <= 0 ||

        inputRate < 0 ||

        months < 1 ||

        months > 1200

    ) {

        errorMessage.textContent =
            translate("errorInvalid");

        errorMessage.style.display = "block";

        return;

    }


    // CONVERT INTEREST RATE

    let monthlyRate;

    if (rateType === "annual") {

        const annualRate = inputRate / 100;

        monthlyRate =
            Math.pow(1 + annualRate, 1 / 12) - 1;

    } else {

        monthlyRate = inputRate / 100;

    }


    // FRENCH AMORTIZATION SYSTEM

    let monthlyPayment;

    if (monthlyRate === 0) {

        monthlyPayment = principal / months;

    } else {

        monthlyPayment =

            principal *

            (

                monthlyRate *

                Math.pow(1 + monthlyRate, months)

            )

            /

            (

                Math.pow(1 + monthlyRate, months) - 1

            );

    }


    // GENERATE AMORTIZATION SCHEDULE

    let remainingBalance = principal;

    let totalInterest = 0;

    let totalPayment = 0;

    amortizationData = [];


    for (

        let month = 1;

        month <= months;

        month++

    ) {


        const beginningBalance = remainingBalance;

        const interest = beginningBalance * monthlyRate;

        let payment = monthlyPayment;

        let principalPayment = payment - interest;


        // FINAL PAYMENT ADJUSTMENT

        if (

            month === months ||

            principalPayment >= remainingBalance

        ) {

            principalPayment = remainingBalance;

            payment = principalPayment + interest;

        }


        remainingBalance -= principalPayment;


        if (Math.abs(remainingBalance) < 0.0000001) {

            remainingBalance = 0;

        }


        totalInterest += interest;

        totalPayment += payment;


        // STORE AMORTIZATION DATA

        amortizationData.push({

            month: month,

            beginningBalance: beginningBalance,

            payment: payment,

            interest: interest,

            principal: principalPayment,

            remainingBalance: remainingBalance

        });


        if (remainingBalance === 0) {

            break;

        }

    }


    // SAVE ORIGINAL INPUTS

    loanInputs = {

        principal: principal,

        inputRate: inputRate,

        rateType: rateType,

        months: months

    };


    // SAVE FINANCIAL SUMMARY

    loanSummary = {

        principal: principal,

        monthlyPayment: monthlyPayment,

        totalInterest: totalInterest,

        totalPayment: totalPayment,

        months: amortizationData.length,

        monthlyRate: monthlyRate

    };


    // DISPLAY RESULTS

    getElement("resultsSection").classList.remove("hidden");

    getElement("scheduleSection").classList.remove("hidden");


    updateResultsDisplay();

    generateTable();

    updateScheduleInfo();

    updatePrintDetails();


    if (window.lucide) {

        window.lucide.createIcons();

    }

}


/* =========================================
   9. UPDATE FINANCIAL RESULTS
========================================= */

function updateResultsDisplay() {

    getElement("monthlyPayment").textContent =

        formatNumber(loanSummary.monthlyPayment);


    getElement("totalInterest").textContent =

        formatNumber(loanSummary.totalInterest);


    getElement("totalPayment").textContent =

        formatNumber(loanSummary.totalPayment);

}


/* =========================================
   10. GENERATE AMORTIZATION TABLE
========================================= */

function generateTable() {

    const tableBody = getElement("tableBody");

    tableBody.innerHTML = "";


    amortizationData.forEach(data => {

        const row = document.createElement("tr");


        const values = [

            data.month,

            formatNumber(data.beginningBalance),

            formatNumber(data.payment),

            formatNumber(data.interest),

            formatNumber(data.principal),

            formatNumber(data.remainingBalance)

        ];


        values.forEach(value => {

            const cell = document.createElement("td");

            cell.textContent = value;

            row.appendChild(cell);

        });


        tableBody.appendChild(row);

    });

}


/* =========================================
   11. UPDATE SCHEDULE INFORMATION
========================================= */

function updateScheduleInfo() {

    const count = amortizationData.length;

    getElement("scheduleInfo").textContent =

        currentLanguage === "es"

            ? `${count} cuotas mensuales`

            : `${count} monthly payments`;

}


/* =========================================
   12. PRINT DETAILS
========================================= */

function getRateTypeLabel() {

    if (loanInputs.rateType === "annual") {

        return translate("pdfAnnualRateType");

    }

    return translate("pdfMonthlyRateType");

}


function updatePrintDetails() {

    if (!loanInputs.principal) return;


    getElement("printLoanAmount").textContent =

        formatNumber(loanInputs.principal);


    getElement("printInputRate").textContent =

        formatPercentage(loanInputs.inputRate);


    getElement("printRateType").textContent =

        getRateTypeLabel();


    getElement("printLoanTerm").textContent =

        currentLanguage === "es"

            ? `${loanInputs.months} meses`

            : `${loanInputs.months} months`;

}


/* =========================================
   13. PRINT SIMULATION
========================================= */

function printSimulation() {

    if (amortizationData.length === 0) {

        window.alert(translate("errorPrint"));

        return;

    }


    updatePrintDetails();


    // OPEN BROWSER PRINT DIALOG

    window.print();

}


/* =========================================
   14. EXPORT PDF
========================================= */

function exportPDF() {


    // VALIDATE SIMULATION

    if (amortizationData.length === 0) {

        window.alert(translate("errorPDF"));

        return;

    }


    // VALIDATE PDF LIBRARY

    if (

        !window.jspdf ||

        !window.jspdf.jsPDF

    ) {

        window.alert(translate("errorPDFLibrary"));

        return;

    }


    const { jsPDF } = window.jspdf;


    const doc = new jsPDF({

        orientation: "landscape",

        unit: "mm",

        format: "a4"

    });


    if (typeof doc.autoTable !== "function") {

        window.alert(translate("errorPDFLibrary"));

        return;

    }


    const pageWidth = doc.internal.pageSize.getWidth();

    const margin = 14;

    const generatedDate = formatDate(new Date());


    // DOCUMENT TITLE

    doc.setFont("helvetica", "bold");

    doc.setFontSize(21);

    doc.setTextColor(20, 43, 74);


    doc.text(

        translate("pdfTitle"),

        margin,

        18

    );


    doc.setFont("helvetica", "normal");

    doc.setFontSize(9);

    doc.setTextColor(105, 116, 132);


    doc.text(

        translate("pdfSubtitle"),

        margin,

        25

    );


    doc.text(

        `${translate("pdfGenerated")}: ${generatedDate}`,

        pageWidth - margin,

        25,

        { align: "right" }

    );


    // LOAN INPUT DETAILS

    const detailsY = 34;

    const detailColumnWidth =

        (pageWidth - margin * 2) / 4;


    const detailItems = [

        [

            translate("pdfLoanAmount"),

            formatNumber(loanInputs.principal)

        ],

        [

            translate("pdfInputRate"),

            formatPercentage(loanInputs.inputRate)

        ],

        [

            translate("pdfRateType"),

            getRateTypeLabel()

        ],

        [

            translate("pdfLoanTerm"),

            currentLanguage === "es"

                ? `${loanInputs.months} meses`

                : `${loanInputs.months} months`

        ]

    ];


    doc.setDrawColor(220, 226, 234);

    doc.setFillColor(247, 249, 252);


    doc.roundedRect(

        margin,

        detailsY,

        pageWidth - margin * 2,

        17,

        2,

        2,

        "FD"

    );


    detailItems.forEach((item, index) => {

        const x = margin + 4 + index * detailColumnWidth;


        doc.setFont("helvetica", "bold");

        doc.setFontSize(7.5);

        doc.setTextColor(105, 116, 132);


        doc.text(

            item[0],

            x,

            detailsY + 6

        );


        doc.setFont("helvetica", "normal");

        doc.setFontSize(9);

        doc.setTextColor(35, 47, 64);


        doc.text(

            String(item[1]),

            x,

            detailsY + 12

        );

    });


    // FINANCIAL SUMMARY

    const summaryY = 60;


    const summaryItems = [

        [

            translate("pdfMonthlyPayment"),

            formatNumber(loanSummary.monthlyPayment)

        ],

        [

            translate("pdfTotalInterest"),

            formatNumber(loanSummary.totalInterest)

        ],

        [

            translate("pdfTotalPayment"),

            formatNumber(loanSummary.totalPayment)

        ],

        [

            translate("pdfMonthlyRate"),

            formatPercentage(loanSummary.monthlyRate * 100)

        ]

    ];


    const summaryWidth =

        (pageWidth - margin * 2 - 9) / 4;


    summaryItems.forEach((item, index) => {

        const x = margin + index * (summaryWidth + 3);


        doc.setDrawColor(225, 230, 237);

        doc.setFillColor(255, 255, 255);


        doc.roundedRect(

            x,

            summaryY,

            summaryWidth,

            18,

            2,

            2,

            "FD"

        );


        doc.setFont("helvetica", "normal");

        doc.setFontSize(7.2);

        doc.setTextColor(105, 116, 132);


        doc.text(

            item[0],

            x + 3,

            summaryY + 6

        );


        doc.setFont("helvetica", "bold");

        doc.setFontSize(10);

        doc.setTextColor(20, 43, 74);


        doc.text(

            String(item[1]),

            x + 3,

            summaryY + 13

        );

    });


    // AMORTIZATION TABLE DATA

    const tableRows = amortizationData.map(data => [

        String(data.month),

        formatNumber(data.beginningBalance),

        formatNumber(data.payment),

        formatNumber(data.interest),

        formatNumber(data.principal),

        formatNumber(data.remainingBalance)

    ]);


    // PDF TABLE — AUTOMATIC MULTIPAGE SUPPORT

    doc.autoTable({

        startY: 84,

        margin: {

            top: 12,

            right: margin,

            bottom: 16,

            left: margin

        },

        head: [[

            translate("pdfMonth"),

            translate("pdfBeginningBalance"),

            translate("pdfMonthlyPayment"),

            translate("pdfInterest"),

            translate("pdfPrincipal"),

            translate("pdfRemainingBalance")

        ]],

        body: tableRows,

        theme: "grid",

        showHead: "everyPage",

        pageBreak: "auto",

        rowPageBreak: "avoid",

        styles: {

            font: "helvetica",

            fontSize: 7.5,

            cellPadding: 2.5,

            textColor: [55, 65, 81],

            lineColor: [225, 230, 237],

            lineWidth: 0.15,

            overflow: "linebreak"

        },

        headStyles: {

            fillColor: [20, 43, 74],

            textColor: [255, 255, 255],

            fontStyle: "bold"

        },

        alternateRowStyles: {

            fillColor: [244, 246, 249]

        },

        columnStyles: {

            0: {

                halign: "center",

                cellWidth: 18

            },

            1: { halign: "right" },

            2: { halign: "right" },

            3: { halign: "right" },

            4: { halign: "right" },

            5: { halign: "right" }

        },

        didDrawPage: () => {

            const pageCount = doc.internal.getNumberOfPages();

            const currentPage =
                doc.internal.getCurrentPageInfo().pageNumber;


            doc.setFont("helvetica", "normal");

            doc.setFontSize(8);

            doc.setTextColor(130, 140, 153);


            doc.text(

                `${translate("pdfPage")} ${currentPage} / ${pageCount}`,

                pageWidth - margin,

                doc.internal.pageSize.getHeight() - 6,

                { align: "right" }

            );

        }

    });


    // DOWNLOAD PDF

    const filename =

        currentLanguage === "es"

            ? "Simulacion_Prestamo.pdf"

            : "Loan_Simulator_Report.pdf";


    doc.save(filename);

}


/* =========================================
   15. INITIALIZE APPLICATION
========================================= */

document.addEventListener("DOMContentLoaded", () => {

    initializeEventListeners();

    initializeLanguage();

    if (window.lucide) {

        window.lucide.createIcons();

    }

});