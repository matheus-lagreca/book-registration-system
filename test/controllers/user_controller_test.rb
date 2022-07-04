require 'test_helper'

class UserControllerTest < ActionDispatch::IntegrationTest
  setup do
    @user = users(:one)
    @another_user = users(:two)
  end

  # Authentication
  test 'should authenticate user' do
    assert(@user.authenticate('password'))
  end
  test 'should not authenticate user' do
    assert_not(@user.authenticate('somerandomstring'))
  end

  # Email Validation
  test 'Should validate email' do
    assert(User.create(
             {
               email: @user.email,
               password_digest: @user.password_digest
             }
           ))
  end
  test 'Should not validate email' do
    assert_no_difference('User.count') do
      User.create(
        {
          email: @another_user.email,
          password_digest: @another_user.password_digest
        }
      )
    end
  end

  # Sign up

  # Sign In
end
