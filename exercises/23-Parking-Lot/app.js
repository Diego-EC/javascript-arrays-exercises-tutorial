let parking_state = [
  [1,1,1],
  [0,0,0],
  [1,1,2]
]
console.log(getParkingLotState(parking_state))

function getParkingLotState(parkingArray){
    const state = {
     totalSlots: 0,
     availableSlots: 0,
     occupiedSlots: 0
    }

    parkingArray.forEach(row => {
        row.forEach(col => {
            switch (col) {
                case 0:
                    break;
                case 1:
                    state.totalSlots += 1;
                    state.occupiedSlots += 1;
                    break;
                case 2:
                    state.totalSlots += 1;
                    state.availableSlots += 1;
                    break;
                default:
                    break;
            }
        });
    });

    return state;
}