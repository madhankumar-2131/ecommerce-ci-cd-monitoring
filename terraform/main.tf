terraform {
  required_providers {
    render = {
      source  = "renderinc/render"
      version = "~> 0.0.2"
    }
  }
}

provider "render" {
  api_key = var.render_api_key
}

resource "render_static_site" "ecommerce_site" {
  name                 = "ecommerce-devops"
  repo                 = "https://github.com/madhankumar-2131/ecommerce-devops-terraform.git"
  branch               = "main"
  build_command        = ""
  static_publish_path  = "/"
}

