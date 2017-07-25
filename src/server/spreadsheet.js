import GoogleSpreadsheet from 'google-spreadsheet'

const credentials = {
  type: process.env.GOOGLE_SHEETS_TYPE || 'GOOGLE_SHEETS_TYPE',
  project_id: process.env.GOOGLE_SHEETS_PROJECT_ID || 'GOOGLE_SHEETS_PROJECT_ID',
  private_key_id: process.env.GOOGLE_SHEETS_PRIVATE_KEY_ID || 'GOOGLE_SHEETS_PRIVATE_KEY_ID',
  private_key: process.env.GOOGLE_SHEETS_PRIVATE_KEY.replace(/\\n/g, '\n') || 'GOOGLE_SHEETS_PRIVATE_KEY',
  client_email: process.env.GOOGLE_SHEETS_CLIENT_EMAIL || 'GOOGLE_SHEETS_CLIENT_EMAIL',
  client_id: process.env.GOOGLE_SHEETS_CLIENT_ID || 'GOOGLE_SHEETS_CLIENT_ID',
  auth_uri: process.env.GOOGLE_SHEETS_AUTH_URI || 'GOOGLE_SHEETS_AUTH_URI',
  token_uri: process.env.GOOGLE_SHEETS_TOKEN_URI || 'GOOGLE_SHEETS_TOKEN_URI',
  auth_provider_x509_cert_url: process.env.GOOGLE_SHEETS_AUTH_PROVIDER_X509_CERT_URL || 'GOOGLE_SHEETS_AUTH_PROVIDER_X509_CERT_URL',
  client_x509_cert_url: process.env.GOOGLE_SHEETS_CLIENT_X509_CERT_URL || 'GOOGLE_SHEETS_CLIENT_X509_CERT_URL',
}

// Create a document object using the ID of the spreadsheet - obtained from its URL.
const doc = new GoogleSpreadsheet(process.env.GOOGLE_SHEETS_SPREADSHEET_ID)

export default rowData => new Promise((resolve, reject) => {
  // Authenticate with the Google Spreadsheets API.
  doc.useServiceAccountAuth(credentials, (err) => {
    if (err) {
      reject(err)
    } else {
      // Get add a row to the spreadsheet
      doc.addRow(1, rowData, (err2, row) => {
        if (err2) {
          reject(err2)
        } else {
          resolve(row)
        }
      })
    }
  })
})
