# email: string
# password_digest: string
#
# password: string virtual
# password_confirmation: string virtual
class User < ApplicationRecord
  has_secure_password
  has_many :books

  validates :email, presence: true
end
