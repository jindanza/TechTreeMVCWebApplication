$(function () {
    function WireUpDatePicker() {
        const addMonths = 2;
        var currDate = new Date();

        $('.datepicker').datepicker(
            {
                dateFormat: 'yyyy-MM-dd',
                minDate: currDate,
                maxDate: AddSubtractMonths(currDate, addMonths)
            }
        );
    }

    WireUpDatePicker();
    
})