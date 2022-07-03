# email: string
# password_digest: string
#
# password: string virtual
# password_confirmation: string virtual
class User < ApplicationRecord
  has_secure_password
  has_many :books

  validates :email, presence: true, format: { with: /\A[^@\s]+@[^@\s]+\z/, message: 'Must be a valid Email address.' }
end
