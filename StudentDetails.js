import classes from "./StudentDetails.module.css";

function StudentDetails() {
  return (
    <div className={classes.parents}>
      <div className={classes.mainContainer}>
        <div className={classes.block1}>
          <div className={classes.admissionNo}>Admission No :</div>
          <div className={classes.AdmissionNO}>100</div>
        </div>

        <div className={classes.block1}>
          <div className={classes.name}>Name :</div>
          <div className={classes.Name}>Sagar Patra</div>
        </div>

        <div className={classes.block1}>
          <div className={classes.role}>Role :</div>
          <div className={classes.Role}>Student</div>
        </div>

        <div className={classes.block1}>
          <div className={classes.title}>Title :</div>
          <div className={classes.Title}>Dummmy Title</div>
        </div>

        <div className={classes.block1}>
          <div className={classes.gender}>Gender :</div>
          <div className={classes.Gender}>Male</div>
        </div>

        <div className={classes.block1}>
          <div className={classes.dateofBirth}>Date of Birth :</div>
          <div className={classes.DateofBirth}>20-12-2023</div>
        </div>

        <div className={classes.block1}>
          <div className={classes.motherTounge}>MotherTounge :</div>
          <div className={classes.MotherTounge}>Hindi</div>
        </div>

        <div className={classes.block1}>
          <div className={classes.nationality}>Nationality :</div>
          <div className={classes.Nationality}>India</div>
        </div>

        <div className={classes.block1}>
          <div className={classes.aadharNo}>Aadhaar no :</div>
          <div className={classes.AadharNO}>1234 1235 3698</div>
        </div>

        <div className={classes.block1}>
          <div className={classes.classsNameTitle}>Class :</div>
          <div className={classes.ClassnameTitle}>12th</div>
        </div>

        <div className={classes.block1}>
          <div className={classes.contactNo}>Contact No :</div>
          <div className={classes.ContactNo}>+91 8855935799</div>
        </div>

        <div className={classes.block1}>
          <div className={classes.presentAddress}>Present address :</div>
          <div className={classes.PresentAddress}>
            permanent addresspermanent addresspermanent addresspermanent
            addresspermanent addresspermanent address
          </div>
        </div>

        <div className={classes.block1}>
          <div className={classes.permanantAddress}>Permanent address :</div>
          <div className={classes.PermanantAddress}>
            permanent addresspermanent addresspermanent addresspermanent
            addresspermanent address
          </div>
        </div>

        <div className={classes.block1}>
          <div className={classes.UploadPhoto}>Upload Photo :</div>
          <div className={classes.uploadPhoto}>Upload Button</div>
        </div>
      </div>
    </div>
  );
}
export default StudentDetails;
