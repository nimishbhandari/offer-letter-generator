import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  PDFViewer,
} from "@react-pdf/renderer";
import React from "react";
// Create styles
const styles = StyleSheet.create({
  page: {
    backgroundColor: "white",
    color: "black",
  },
  section: {
    margin: 8,
    padding: 8,
  },
  heading: {
    margin: 10,
    padding: 10,
    fontSize: "20px",
    textAlign: "center",
    textDecoration: "underline",
    textDecorationThickness: "auto",
  },
  viewer: {
    width: window.innerWidth, //the pdf viewer will take up all of the width and height
    height: window.innerHeight,
  },
});

// Create Document Component
function BasicDocument({ varValue, recruiterName, companyName }) {
  return (
    <PDFViewer style={styles.viewer}>
      {/* Start of the document*/}
      <Document>
        {/*render a single page*/}
        <Page size="A4" style={styles.page}>
          <View style={styles.heading}>
            <Text>Job Offer</Text>
          </View>
          <View style={styles.section}>
            <Text>Dear {varValue[0]},</Text>
          </View>
          <View style={styles.section}>
            <Text>
              We are pleased to offer you the position of {varValue[1]} at{" "}
              {companyName} Company. The terms and conditions of your employment
              are as follows:
            </Text>
          </View>
          <View style={{ marginLeft: "7vw", marginTop: "-2vw" }}>
            <Text style={{ marginHorizontal: 8 }}>• Role: {varValue[1]}</Text>
            <Text style={{ marginHorizontal: 8 }}>
              • Salary: ${varValue[2]} per year
            </Text>
            <Text style={{ marginHorizontal: 8 }}>
              • Benefits: Health insurance, paid time off, retirement plan
            </Text>
          </View>
          <View style={styles.section}>
            <Text>
              Please review this offer carefully and sign the acceptance letter
              attached to this email. We look forward to welcoming you to our
              team.
            </Text>
          </View>
          <View style={{ margin: 3, padding: 3, marginLeft: "3vw" }}>
            <Text>Sincerely,</Text>
          </View>
          <View style={{ margin: 3, padding: 3, marginLeft: "3vw" }}>
            <Text>{recruiterName}</Text>
          </View>
          <View style={{ margin: 3, padding: 3, marginLeft: "3vw" }}>
            <Text>HR Manager, {companyName}</Text>
          </View>
        </Page>
      </Document>
    </PDFViewer>
  );
}
export default BasicDocument;
