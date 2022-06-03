import React, { useState, useRef, useEffect } from 'react';
export const Select = (props) =>
{
    const [value, setvalue] = useState(null);
    const [object, setobject] = useState(null);

    const items = [
        {
          ID: 1,
          Name: 'Value 1'
        },
        {
          ID: 2,
          Name: 'Value 2'
        },
        {
          ID: 3,
          Name: 'Value 3'
        }
    ];

    const groupitems = [
        {label:"MH", options:[{ "ID": 1, Name: "Pune" }, { "ID": 2, Name: "Mumbai" }, { "ID": 3, Name: "Thane" }]},
        {label:"HR", options:[{ "ID": 5, Name: "Faridabad" }, { "ID": 6, Name: "Fatehabad" }, { "ID": 7, Name: "Hisar" }]}]
    
        const onValueChange = (e) => {
            setvalue(e.value);          
        }
        const objectChange = (e) => {
            setobject( e.value );          
        }

    return (
        <>
            <div>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-3">
                            <div>Basic</div>
                        </div>
                        <div className="col-md-6">
                            <Select items={items} valueField="ID" textField="Name" allowClear={false} placeholder="placeholder"/>
                        </div>
                        <div className="col-md-3">
                            
                        </div>
                    </div>
                    <hr />
                    <div className="row">
                        <div className="col-md-3">
                            <div>Editable</div>
                        </div>
                        <div className="col-md-6">
                            <Select items={items} valueField="ID" textField="Name" allowClear={false} placeholder="placeholder"/>
                        </div>
                        <div className="col-md-3">
                            
                        </div>
                    </div>
                    <hr />
                    <div className="row">
                        <div className="col-md-3">
                            <div>Grouping</div>
                        </div>
                        <div className="col-md-6">
                            <Select items={groupitems} valueField="ID" textField="Name" allowClear={false} placeholder="placeholder"/>
                        </div>
                        <div className="col-md-3">
                            
                        </div>
                    </div>
                    <hr />
                    <div className="row">
                        <div className="col-md-3">
                            <div>Multi Select</div>
                        </div>
                        <div className="col-md-6">
                            <Select items={items} valueField="ID" textField="Name" multiple={true} placeholder="placeholder"/>
                        </div>
                        <div className="col-md-3">
                            
                        </div>
                    </div>
                    <hr />
                    <div className="row">
                        <div className="col-md-3">
                            <div>Value Change</div>
                        </div>
                        <div className="col-md-6">
                            <Select items={items} valueChange={(e)=> onValueChange(e) } valueField="ID" textField="Name" allowClear={false} placeholder="placeholder"/>
                        </div>
                        <div className="col-md-3">
                            {JSON.stringify(value)}
                        </div>
                    </div>
                    <hr />
                    <div className="row">
                        <div className="col-md-3">
                            <div>Disabled</div>
                        </div>
                        <div className="col-md-6">
                            <Select items={items} valueField="ID" textField="Name" disabled={true} placeholder="placeholder"/>
                        </div>
                        <div className="col-md-3">
                            
                        </div>
                    </div>
                    <hr />
                    <div className="row">
                        <div className="col-md-3">
                            <div>Object Value</div>
                        </div>
                        <div className="col-md-6">
                            <Select items={items} objectChange={(e)=> objectChange(e) } valueField="ID" textField="Name" allowClear={false} placeholder="placeholder"/>
                        </div>
                        <div className="col-md-3">
                            {JSON.stringify(object)}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};
