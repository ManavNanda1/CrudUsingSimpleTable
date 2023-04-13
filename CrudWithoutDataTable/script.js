let data =[];
function Changeid(tableid){
    let getAllTr = document.getElementById(tableid).rows;
    for(let i =1; i<getAllTr.length; i++){
        getAllTr[i].cells[0].innerHTML = i;
    }
}
function SubmitData(){
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let mark =  document.getElementById('mark').value;

    let table = document.getElementById("SavedTable");
    let row = table.insertRow();
    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    let cell3 = row.insertCell(2);
    let cell4 = row.insertCell(3);
    let cell5 = row.insertCell(4);

    cell1.innerHTML = `1`;
    cell2.innerHTML = name;
    cell3.innerHTML = email;
    cell4.innerHTML = mark;
    cell5.innerHTML = `<button class="btn btn-danger" onclick="DeleteData(this)">Delete</button>
                        <button class="btn btn-warning " data-bs-toggle="modal" data-bs-target="#exampleModal" onclick="EditData(this)">Edit</button>`;
    Changeid("SavedTable");
    document.getElementById('name').value='';
    document.getElementById('email').value='';
    document.getElementById('mark').value='';

    data.push({name:name,email:email,mark:mark});

}

function DeleteData(Discard){
    Discard.parentElement.parentElement.remove();
    Changeid("SavedTable");
}

function ValidatedData(){
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let mark =  document.getElementById('mark').value;

    if(name == "" || email == "" || mark ==""){
        alert("Please Fill All The Values First");
        return;
    }
    else{
        SubmitData()
    }
    $('#exampleModal').modal('hide');
}

function EditData(Edit){
    let tr =  Edit.closest('tr');
    let name = tr.cells[1].innerHTML;
    let email = tr.cells[2].innerHTML;
    let mark = tr.cells[3].innerHTML;

    document.getElementById('name').value = name; 
    document.getElementById('email').value = email;
    document.getElementById('mark').value = mark;

    Changeid("SavedTable");

     let tr1 = Edit.closest('tr');

    console.log(tr1);
$('#Updatebtn').on('click', function () {
    $(tr1).find('td:eq(1)').html($('#name').val());
    $(tr1).find('td:eq(2)').html($('#email').val());
    $(tr1).find('td:eq(3)').html($('#mark').val());
    tr='';
    tr1=''; 
})
}


function Search(){
    let InputValue = document.getElementById("searchbar").value.toUpperCase();
    let GetRow = document.getElementById("SavedTable").rows;
    for(let i =1; i<GetRow.length; i++){
        let getTd = GetRow[i].cells[1];
        if(getTd){
            let tabletext = getTd.TextContent || getTd.innerHTML;
            if(tabletext.toUpperCase().indexOf(InputValue) > -1){
                GetRow[i].style.display = "";
            }
            else{
                GetRow[i].style.display = "none";
            }
        }
    }
    
}


