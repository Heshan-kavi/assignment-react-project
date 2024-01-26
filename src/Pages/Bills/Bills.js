import React, {useId, useRef} from "react";
import classes from "./BillsStyles.module.css";

function Bills(){

    const newSkillName = useId();
    const damage = useId();
    const newSkillNameRef = useRef(null);
    const damageRef = useRef(null);

    return (
        <div className={classes.section}>
            <div className={classes.wrapper}>
                <h1 className={classes.h1}>Bills Details</h1>
                <div className={classes.container}>
                    <div className={classes.cardMain}>
                        <span className={classes.cardTitle}>Recent Bills</span>
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
                        <span className={classes.cardTitle}>Get Bill Report</span>
                        <div className={classes.AddNewSkillForm}>
                            <form autoComplete="off">
                                <div className={classes.largeInputContainer}>
                                    <div className={classes.inputContainer}>
                                        <label className={classes.label} htmlFor={newSkillName}>From: </label>
                                        <input className={classes.userInput} ref={newSkillNameRef} name="newSkillName" id={newSkillName} placeholder="First Name" required autoFocus></input>
                                    </div>
                                    <div className={classes.inputContainer}>
                                        <label className={classes.label} htmlFor={damage}>Second Name: </label>
                                        <input className={classes.userInput} ref={damageRef} name="damage" id={damage} placeholder="Second Name" required></input>
                                    </div>
                                </div>
                                <div className={classes.buttonContainer}>
                                    <button className={classes.clearButton}>
                                        Clear
                                    </button>
                                    <button className={classes.submitButton} type="submit">
                                        Generate
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

export default Bills;