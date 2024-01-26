import React, {useId, useRef, useState, useEffect} from "react";
import moment from 'moment';
import classes from "./PatientsStyles.module.css";
import { TbWindowMaximize } from "react-icons/tb";

function Patients(){

    const newSkillName = useId();
    const damage = useId();
    const newSkillNameRef = useRef(null);
    const damageRef = useRef(null);
    const [patients, setPatients] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5050/user/singlePatient', {mode: 'cors'})
            .then((res) => res.json())
            .then((data) => {
                setPatients(data);
            })
            .catch((err) => {
                console.log(err.message);
            });
    }, []);

    return (
        <div className={classes.section}>
            <div className={classes.wrapper}>
                <h1 className={classes.h1}>Patient Details</h1>
                <div className={classes.container}>
                    <div className={classes.cardMain}>
                        <span className={classes.cardTitle}>Existing Patients</span>
                    {
                    patients.length !== 0 ? 
                        <table className={classes.table}>
                            <tbody>
                            <tr className={classes.tr}>
                                <th className={classes.trh}>First Name</th>
                                <th className={classes.trh}>Second Name</th>
                                <th className={classes.trh}>Birthday</th>
                                <th className={classes.trh}>Gender</th>
                                <th className={classes.trh}>More</th>
                            </tr>
                            {patients.map((val, key) => {
                                return (
                                    <tr className={classes.tr} key={key}>
                                        <td className={classes.td}>{val.FirstName}</td>
                                        <td className={classes.td}>{val.SecondName}</td>
                                        <td className={classes.td}>{val.BirthDay.substring(0,10)}</td>
                                        <td className={classes.td}>{val.Gender}</td>
                                        <td className={classes.td}><TbWindowMaximize/></td>
                                    </tr>
                                )
                            })}
                            </tbody>
                        </table> : 
                        <div className={classes.cardNoContentText}>There are no Characters to show for you</div>}
                    </div>
                    <div className={classes.cardSub}>
                        <span className={classes.cardTitle}>Add New Patient</span>
                        <div className={classes.AddNewSkillForm}>
                            <form autoComplete="off">
                                <div className={classes.largeInputContainer}>
                                    <div className={classes.inputContainer}>
                                        <label className={classes.label} htmlFor={newSkillName}>First Name: </label>
                                        <input className={classes.userInput} ref={newSkillNameRef} name="newSkillName" id={newSkillName} placeholder="First Name" required autoFocus></input>
                                    </div>
                                    <div className={classes.inputContainer}>
                                        <label className={classes.label} htmlFor={damage}>Second Name: </label>
                                        <input className={classes.userInput} ref={damageRef} name="damage" id={damage} placeholder="Second Name" required></input>
                                    </div>
                                </div>
                                <div className={classes.largeInputContainer}>
                                    <div className={classes.birthdayContainer}>
                                        <label className={classes.label} htmlFor={newSkillName}> Birthday: </label>
                                        <input className={classes.birthdayInput} type="datetime-local" id="birthdaytime" name="birthdaytime"></input>
                                    </div>
                                    <div className={classes.genderContainer}>
                                        <label className={classes.label} htmlFor={damage}>Gender: </label>
                                        <select className={classes.genderInput} name="cars" id="cars">
                                            <option value="male">Male</option>
                                            <option value="female">Female</option>
                                        </select>
                                    </div>
                                </div>
                                <div className={classes.largeInputContainer}>
                                    <div className={classes.inputContainer}>
                                        <label className={classes.label} htmlFor={newSkillName}>NIC: </label>
                                        <input className={classes.userInput} ref={newSkillNameRef} name="newSkillName" id={newSkillName} placeholder="NIC" required autoFocus></input>
                                    </div>
                                    <div className={classes.inputContainer}>
                                        <label className={classes.label} htmlFor={damage}>Contact No: </label>
                                        <input className={classes.userInput} ref={damageRef} name="damage" id={damage} placeholder="Contact No" required></input>
                                    </div>
                                </div>
                                <div className={classes.largeSingleInputContainer}>
                                    <label className={classes.label} htmlFor={newSkillName}>Address: </label>
                                    <input className={classes.userInput} ref={newSkillNameRef} name="newSkillName" id={newSkillName} placeholder="Address" required autoFocus></input>
                                </div>
                                <div className={classes.largeSingleInputContainer}>
                                    <label className={classes.label} htmlFor={newSkillName}>Notes: </label>
                                     <input className={classes.userInput} ref={newSkillNameRef} name="newSkillName" id={newSkillName} placeholder="Notes" required autoFocus></input>
                                </div>
                                <div className={classes.buttonContainer}>
                                    <button className={classes.clearButton}>
                                        Clear
                                    </button>
                                    <button className={classes.removeButton}>
                                        Remove
                                    </button>
                                    <button className={classes.submitButton} type="submit">
                                        Submit
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Patients;