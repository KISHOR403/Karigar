terraform {
  required_version = ">= 1.5.0"
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.0"
    }
  }
}

provider "aws" {
  region = var.aws_region
}

variable "aws_region" {
  type    = string
  default = "ap-south-1" # Mumbai region for direct low-latency Indian artisan access
}

# Production Object Storage S3 Bucket for High-Resolution Artisan Process Media
resource "aws_s3_bucket" "artisan_media" {
  bucket = "karigar-production-artisan-media"

  tags = {
    Environment = "production"
    Application = "karigar"
  }
}
