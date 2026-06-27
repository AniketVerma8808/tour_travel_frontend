import { createContext, useContext, useEffect, useState, useCallback, } from "react";

import {
    getApprovedReviewsService,
    createReviewService,
} from "../services/review.service";

const ReviewContext = createContext();

export const ReviewProvider = ({ children }) => {
    const [reviews, setReviews] = useState([]);
    const [loading, setLoading] = useState(true);
    const [submitLoading, setSubmitLoading] = useState(false);

    // Fetch Approved Reviews
    const fetchReviews = useCallback(async () => {
        setLoading(true);

        try {
            const { data } = await getApprovedReviewsService();

            setReviews(data?.reviews || []);
        } catch (error) {
            console.error("Fetch Reviews Error:", error);
            setReviews([]);
        } finally {
            setLoading(false);
        }
    }, []);

    // Create Review
    const createReview = async (reviewData) => {
        setSubmitLoading(true);

        try {
            const { data } = await createReviewService(reviewData);

            return data;
        } catch (error) {
            console.error("Create Review Error:", error);

            throw (
                error?.response?.data || {
                    success: false,
                    message: "Something went wrong",
                }
            );
        } finally {
            setSubmitLoading(false);
        }
    };

    useEffect(() => {
        fetchReviews();
    }, [fetchReviews]);

    return (
        <ReviewContext.Provider
            value={{
                reviews,
                loading,
                submitLoading,
                fetchReviews,
                createReview,
            }}
        >
            {children}
        </ReviewContext.Provider>
    );
};

export const useReview = () => {
    const context = useContext(ReviewContext);

    if (!context) {
        throw new Error("useReview must be used within ReviewProvider");
    }

    return context;
};