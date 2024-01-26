import React, {useId, useRef} from "react";
import classes from "./PatientsStyles.module.css";

function Patients(){

    const newSkillName = useId();
    const damage = useId();
    const newSkillNameRef = useRef(null);
    const damageRef = useRef(null);

    return (
        <div className={classes.section}>
            <div className={classes.wrapper}>
                <h1 className={classes.h1}>Patient Details</h1>
                <div className={classes.container}>
                    <div className={classes.cardMain}>
                        <span className={classes.cardTitle}>Existing Patients</span>
                    {
                    // characterRecords.length !== 0 ? 
                    //     <table>
                    //         <tbody>
                    //         <td>
                    //             <th>Character Name</th>
                    //             <th>Hit Points</th>
                    //             <th>Strength</th>
                    //             <th>Defence</th>
                    //         </td>
                    //         {/* {characterRecords.map((val, key) => {
                    //             return (
                    //                 <tr key={key} onClick={() => {setSingleCharacterRecord(val); setShowDetailedView(true)}}>
                    //                     <td>{val.name}</td>
                    //                     <td>{val.hitPoints}</td>
                    //                     <td>{val.strength}</td>
                    //                     <td>{val.defence}</td>
                    //                 </tr>
                    //             )
                    //         })} */}
                    //         </tbody>
                    //     </table> : 
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