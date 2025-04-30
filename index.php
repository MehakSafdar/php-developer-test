<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>PHP Developer Test</title>
  <link rel="stylesheet" href="style.css">
  <script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.0/js/bootstrap.bundle.min.js"></script>
  <link href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.0/css/bootstrap.min.css" rel="stylesheet">

</head>
<body class="bg-light">
    <div class="container form-container">
        <div class="form-box">
            <form id="webhookForm">
                <h2 class="mb-4 text-center">Contact Form</h2>
                
                <div class="mb-3">
                    <label for="fullname" class="form-label">Full Name</label>
                    <input type="text" class="form-control" id="fullname" placeholder="Enter your first and last name" required>
                    <div class="invalid-feedback">
                        Please enter your full name (first and last name).
                    </div>
                </div>
                
                <div class="d-grid gap-2">
                    <button type="submit" class="btn btn-primary" id="submitBtn" disabled>Submit</button>
                </div>
                
                <div class="mt-3 text-center d-none" id="loadingIndicator">
                    <div class="spinner-border text-primary" role="status">
                        <span class="visually-hidden">Loading...</span>
                    </div>
                    <p class="mt-2">Submitting...</p>
                </div>
            </form>
            
            <div class="thank-you" id="thankYouMessage">
                <div class="alert alert-success mb-0">
                    <h4 class="alert-heading">Thank You!</h4>
                    <p>Your submission has been received successfully.</p>
                </div>
            </div>
        </div>
    </div>

  <script src="script.js"></script>
</body>
</html>
