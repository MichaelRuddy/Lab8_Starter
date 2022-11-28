# Lab 8 - Starter
Michael Ruddy
1. Within a Github action that runs whenever code is pushed, so that no code can be pushed unless it passes the outlined tests.  This prevents any code which does not pass the tests from being pushed.
2. No
3. I would not use a unit test for this as a "message" feature within a messaging application is a very large feature which should use E2E testing.  If it were a more specific feature within the messaging app then I would use unit testing.
4. Yes testing the max length constraint is working for a message in the messaging app is a great place to use unit testing as it is a specific feature where you can learn all the information you will need within a single unit test.  For this reason a unit test is perfect as it quickly and easily confirms whether or not this feature works.
