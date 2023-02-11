var floatAge, floatDays, intWeeks, floatMonths, intFortnights;
    floatAge = parseFloat(prompt("Enter Age"));
    floatDays = parseFloat(floatAge * 365.25);
    floatMonths = parseFloat(floatAge * 12);
    intWeeks = parseInt(floatDays / 7);
    intFortnights = parseInt(floatDays / 14);
    alert
    ("Initial Age = " + floatAge + "\n" + 
    "Age in Days = " + floatDays + "\n" + 
    "Age in Weeks = " + intWeeks + "\n" + 
    "Age in Fortnights = " + intFortnights + "\n" + 
    "Age in Months = " + floatMonths + "\n");