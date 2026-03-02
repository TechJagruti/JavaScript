
        let marks = 85;
        let attendance = 80;

        if (marks >= 50) {

            if (attendance >= 75) {
                document.write("Pass");
            } else {
                document.write("Fail due to low attendance");
            }

        } else {
            document.write("Fail due to low marks");
        }
