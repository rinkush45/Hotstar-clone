terraform {
  backend "s3" {
    bucket = "hotstar-clone2" # Replace with your actual S3 bucket name
    key    = "EKS/terraform.tfstate"
    region = "us-east-2"
  }
}
